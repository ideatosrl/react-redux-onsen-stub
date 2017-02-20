#!/bin/bash

for file in $(git diff --cached --name-only --diff-filter=d | grep -E '\.(js|jsx)$')
do
  git show ":$file" | node_modules/.bin/eslint --stdin --stdin-filename "$file" # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint fallito sul file '$file'. Per cortesia controlla meglio il tuo codice e riprova."
    exit 1 # exit with failure status
  fi
done