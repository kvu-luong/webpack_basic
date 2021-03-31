const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	// entry: './src/index.js',
	entry:{
		index: './src/index.js',
		print: './src/print.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test render html file',
		}),
	],
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
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
			{
				// loading images
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				// loading fonts
		        test: /\.(woff|woff2|eot|ttf|otf)$/i,
		        type: 'asset/resource',
		      },
		],
	},
}