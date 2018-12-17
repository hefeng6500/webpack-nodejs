const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	devtool: 'inline-source-map', // 使用 source map，更容易地追踪错误和警告，浏览器运行时在控制台报错
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
};
