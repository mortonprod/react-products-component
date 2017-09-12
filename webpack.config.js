'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports =  {
  entry: {
		bundle: "./products.js"
	},
	plugins: [new ExtractTextPlugin("index.css")],
  module:{
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
		{ test: /\.css$/, loader:ExtractTextPlugin.extract("css-loader") }
  ]
  },
  externals: {
    'react': 'commonjs react', 
		'react-dom':'commonjs react-dom'
  },
	output:{
    libraryTarget: 'umd',
  	filename: 'index.js',	
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
