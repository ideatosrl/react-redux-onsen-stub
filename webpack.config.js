var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:9000',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 9000,
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus?paths=node_modules'
      },
      {
        test: /\.js$|\.jsx$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          'plugins': ['react-hot-loader/babel']
        }
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
