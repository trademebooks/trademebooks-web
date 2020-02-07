#!/usr/bin/env bash

git pull origin master
git pull heroku master

git add -A
git commit -m "New updates!"

git push origin master
git push heroku master # https://git.heroku.com/trademebooks.git