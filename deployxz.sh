#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com/zwking613/xz_blog.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:zwking613/xz_blog.git master:gh-pages

cd -