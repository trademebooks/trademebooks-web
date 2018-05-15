#!/usr/bin/env bash

targeted_database=book_exchange_please

mysql --password='' --user='root' --default-character-set=utf8 -e "
DROP DATABASE IF EXISTS $targeted_database;
CREATE DATABASE $targeted_database;
USE $targeted_database;
"