#!/usr/bin/env bash

git pull
git add -A
git commit -m "New updates!"
git push origin master
git push heroku master # https://murmuring-waters-24563.herokuapp.com/
