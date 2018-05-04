#!/usr/bin/env bash

mysql -u root -e "
DROP DATABASE IF EXISTS book_exchange_please;
CREATE DATABASE book_exchange_please;
USE book_exchange_please;
DROP TABLE IF EXISTS schema_version;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS profile_experience;
DROP TABLE IF EXISTS profile_education;
DROP TABLE IF EXISTS profile_language;
DROP TABLE IF EXISTS profile_award;
DROP TABLE IF EXISTS followee_follower;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS activities;
"
mvn flyway:migrate