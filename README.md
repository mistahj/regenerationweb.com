# regenerationweb.com

## Installation

### Composer

Follow instructions at getcomposer.org

    $ curl -sS https://getcomposer.org/installer | php
    $ php composer.phar install

## MySQL

### Add "regenerationweb" user to mysql:

    $ mysql -uroot mysql

    # Now we want to add the USERNAME user.
    mysql> GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'localhost'
IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;

### Get the SQL loaded

    $ mysql -u USERNAME -p < db/YYYYMMDD.sql
