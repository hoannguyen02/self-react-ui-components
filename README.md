### Step by step guide

1.  Initial project:

    1. `git init`
    2. `yarn init --yes`
    3. `touch .gitgnore`
    4. `touch README.md`
    5. `mkdir src`
    6. `touch index.html`

2.  Setup editor(vscode):

    1. `mkdir .vscode`
    2. `touch settings.json`
    3. `yarn add --dev prettier eslint` - ext [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    4. `touch .prettierrc.yaml`
    5. `yarn add --dev eslint-config-prettier eslint-plugin-prettier` - [prettier with linter](https://prettier.io/docs/en/integrating-with-linters.html)
    6. `yarn add --dev husky lint-staged` - see package.json file how to config it

3.  Webpack

    1. Webpack: `yarn add --dev webpack webpack-cli` - [Webpack](https://webpack.js.org/guides/getting-started/#basic-setup)
    2. Webpack Plugins: `yarn add --dev html-loader html-webpack-plugin clean-webpack-plugin webpack-dev-server` - [Plugins](https://webpack.js.org/plugins/)
    3. Setup webpack.config.js file: `touch webpack.config.js` - [config](https://webpack.js.org/configuration/), [Under the hood](https://webpack.js.org/concepts/under-the-hood/)

4.  Setup Babel, react and render first component:
    1.  Install babel: `yarn add --dev babel-loader @babel/core` - [Babel](https://babeljs.io/setup#installation)
    2.  Install Preset: `yarn add --dev @babel/preset-react @babel/preset-env` - [Preset env](https://babeljs.io/docs/en/presets), [Preset React](https://babeljs.io/docs/en/babel-preset-react)
    3.  Modify webpack.config.js: [Setup Loader](https://webpack.js.org/loaders/babel-loader/)
    4.  Install react: `yarn add react react-dom`
    5.  Install babel eslint: `yarn add --dev babel-eslint` - [Babel Eslint](https://github.com/babel/babel-eslint)
    6.  Modify webpack.config.js: [Setup Output](https://webpack.js.org/configuration/output/)
    7.  Render first react component
