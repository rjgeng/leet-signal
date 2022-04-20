---
layout: default
---

# Code signal Arcade

```
rm -rf code-signal-arcade
rm .gitmodules
rm -rf .git
git init
git branch -M gh-pages
git remote add origin git@github.com:rjgeng/leet-signal.git
git submodule add git@github.com:code-signal/code-signal-arcade.git
git add .
git commit -m 'first commit'
git push origin gh-pages --force
```
