#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git add -A
git commit -m 'blog commit'

# 如果发布到 https://<USERNAME>.github.io
git push origin main

cd -


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:zichenlbl/vuepress.git master:gh-pages