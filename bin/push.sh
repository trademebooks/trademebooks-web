#!/usr/bin/env bash

git pull origin master
#git pull heroku master

git add -A
git commit -m "$1"

git push origin master
#git push heroku master # https://git.heroku.com/trademebooks.git