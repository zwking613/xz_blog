#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'blog commit'

# 以下修改为推送至 main 分支
# git remote add origin git@github.com:zwking613/xz_blog.git
git push -f git@github.com/zwking613/xz_blog.git main
# git pull origin main

# git push origin main

cd -