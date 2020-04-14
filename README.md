### Step by step guide

1.  Initial project:

    1. `git init`
    2. `yarn init --yes`
    3. `touch .gitgnore`
    4. `touch README.md`
    5. `mkdir src`
    6. `touch index.html`
    7. `touch index.js`

2.  Setup editor(vscode):
    1. `mkdir .vscode`
    2. `touch settings.json`
    3. `yarn add --dev prettier eslint` - ext [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    4. `touch .prettierrc.yaml`
    5. `yarn add --dev eslint-config-prettier eslint-plugin-prettier` - [prettier with linter](https://prettier.io/docs/en/integrating-with-linters.html)
    6. `yarn add --dev husky lint-staged` - see package.json file how to config it
