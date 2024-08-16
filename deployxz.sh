#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'

git remote add origin git@github.com/zwking613/xz_blog.git
git push -f origin main

cd -