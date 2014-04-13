# regenerationweb.com

See more notes from the [Installation Notes](https://docs.google.com/document/d/1bELa9QXGW3wd5j9U8D6aJP6VaxnxESasjU1vc3tpqFU/edit#).

## Installation

### Ruby/Bundler

#### Install Ruby 1.9

    $ gem install bundler
    $ bundle install

### Composer

Composer installs PHP dependencies. Follow instructions at getcomposer.org; you can install by doing:

    $ curl -sS https://getcomposer.org/installer | php
    $ php composer.phar install

## MySQL

### Add "regenerationweb" user to mysql:

    $ mysql -uroot mysql

    # Now we want to add the USERNAME user.
    mysql> GRANT ALL PRIVILEGES ON *.* TO 'USERNAME'@'localhost' IDENTIFIED BY 'PASSWORD' WITH GRANT OPTION;

### Get the SQL loaded

    $ mysql -u USERNAME -p < db/YYYYMMDD.sql

## Deployment

Deployment is Capistrano-based.

    $ bundle exec cap production deploy

Alternatively, you can deploy [via Jenkins](http://builds.porkbuns.net/job/regenerationweb.com-Deploy/).
