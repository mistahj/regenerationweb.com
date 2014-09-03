#!/bin/bash
mysql -uroot -proot -e "DROP DATABASE $DRUPAL_DB; CREATE DATABASE $DRUPAL_DB; GRANT ALL PRIVILEGES ON $DRUPAL_DB.* TO '$DRUPAL_DB_USER'@'localhost' IDENTIFIED BY '$DRUPAL_DB_PASSWORD'; FLUSH PRIVILEGES;"
# unzips db/YYYYMMDD.sql.gz to db/YYYYMMDD.sql
find db | grep sql.gz | xargs gunzip


mysql -uroot -proot $DRUPAL_DB < db/$filename.sql
