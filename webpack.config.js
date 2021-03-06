const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./config');

const webpackConfig = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    host: '172.30.1.101', // config.host,
    port: config.port,
    publicPath: '/'
  },

  entry: {
    app: [
      './src/index.js'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.DefinePlugin({ __DEV__: !config.production }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};

if (config.production) {
  // add css loader with ExtractTextPlugin
  webpackConfig.module.rules.push({
    test: /\.(css|scss)$/,
    loader: ExtractTextPlugin.extract([
      'css-loader?modules&importLoaders=1&minimize',
      'postcss-loader',
      'sass-loader'
    ])
  });
  // add optimizations
  webpackConfig.plugins.push(
    new ExtractTextPlugin('styles-[contenthash].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    // create global constants at compile time...
    // this enables the minification step to remove
    // entire environment specific code blocks (React.js)
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
} else {
  // devServer options
  webpackConfig.devServer.hot = true;
  // source maps
  webpackConfig.devtool = 'source-map';
  // add css loader
  webpackConfig.module.rules.push({
    test: /\.(css|scss)$/,
    loaders: [
      'style-loader',
      // &sourceMap removed below see following
      // https://github.com/webpack/style-loader/issues/55
      // https://github.com/davezuko/react-redux-starter-kit/issues/696
      'css-loader?modules&importLoaders=1',
      'postcss-loader',
      'sass-loader'
    ]
  });
  // add HMR
  webpackConfig.entry.app.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.host}:${config.port}`,
    'webpack/hot/only-dev-server'
  );
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = webpackConfig;
