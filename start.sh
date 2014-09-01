#!/bin/bash
if [ ! -f /var/www/sites/default/settings.php ]; then
	# Start mysql
	/usr/bin/mysqld_safe &
	sleep 10s
	# Generate random passwords
  DRUPAL_DB="regenera_drupal"
  DRUPAL_DB_USER="regenera_drupal"

	MYSQL_ROOT_PASSWORD=`pwgen -c -n -1 12`
	DRUPAL_DB_PASSWORD=`pwgen -c -n -1 12`

	# This is so the passwords show up in logs.
	echo mysql root password: $MYSQL_ROOT_PASSWORD
	echo drupal password: $DRUPAL_DB_PASSWORD
	echo $MYSQL_ROOT_PASSWORD > /mysql-root-pw.txt
	echo $DRUPAL_DB_PASSWORD > /drupal-db-pw.txt
	mysqladmin -u root password $MYSQL_ROOT_PASSWORD
	mysql -uroot -p$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE $DRUPAL_DB; GRANT ALL PRIVILEGES ON $DRUPAL_DB.* TO '$DRUPAL_DB_USER'@'localhost' IDENTIFIED BY '$DRUPAL_DB_PASSWORD'; FLUSH PRIVILEGES;"
	sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/sites-available/default
	a2enmod rewrite vhost_alias
	cd /var/www/
	drush site-install standard -y --account-name=admin --account-pass=admin --db-url="mysqli://${DRUPAL_DB_USER}:${DRUPAL_DB_PASSWORD}@localhost:3306/${DRUPAL_DB}"
	killall mysqld
	sleep 10s
fi
supervisord -n
