https://webpack.js.org/guides/getting-started/

```
mkdir <webpack-project>
cd <webpack-project>
npm init -y
npm install webpack webpack-cli --save-dev
npm install --save lodash

```

Name of folder and file must be like this one: src/index.js, dist/...
=> use comand below to generate bundle js call 'main.js'
```
npx webpack
```

Start using config webpack file named 'webpack.config.js'
```
npx webpack --config webpack.config.js
```

package.json 
"build": "webpack"
=> run ``` npm run build ```