#!/bin/sh

echo 'This runs the following commandsin a detached screen(1)'
echo 'If you are not familiar with the screen utility, consider running manually:'
echo
echo ' > npm run start-webpack'
echo ' > bundle exec jekyll serve' 
echo
echo '(reminder: use `screen -ls` to list and `screen -DR` to detach-reattach)'

screen -d -m npm run start-webpack
screen -d -m bundle exec jekyll serve
