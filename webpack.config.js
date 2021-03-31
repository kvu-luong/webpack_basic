const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test render html file',
		}),
	],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				loader: 'style-loader',	
			},	
			{
				//change name of class css
				test: /\.css$/i,
				loader: "css-loader",
		       	options: {
			        modules: {
			        	// auto: true,
			          	localIdentName: "[path][name]__[local]--[hash:base64:5]",
			         },
		        },
			},
		],
	},
}