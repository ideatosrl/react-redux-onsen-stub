#!/bin/bash

for file in $(git diff --cached --name-only --diff-filter=d | grep -E '\.(js|jsx)$')
do
  git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" 
  if [ $? -ne 0 ]; then
    echo "ESLint failed on '$file'. Please check your code and retry"
    exit 1 # exit with failure status
  fi
done