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

Start cover css
```
npm install --save-dev style-loader css-loader
```

***
Change name of class css in html ```css-loader```
```
options: {
	modules: {
		//if turn this one = true , it's mean the name of css class will not change
		auto: true,
		//change the name of css class with specific format ( auto = false)
		localIdentName: "[path][name]__[local]--[hash:base64:5]",

	},
},
```

auto generate html file need to install package and setup in webpack.config.js
```
npm install --save-dev html-webpack-plugin
```

multiple output: https://webpack.js.org/guides/output-management/ 
