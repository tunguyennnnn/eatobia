const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Config directories
const SRC_DIR = path.resolve(__dirname, 'client/src')
const OUTPUT_DIR = path.resolve(__dirname, 'public')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR]

module.exports = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              }
            },
            'postcss-loader',
            { loader: 'sass-loader', query: {} }
          ]
        }),
        include: defaultInclude
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      }
    ]
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html'
    }),
    new ExtractTextPlugin('styles.css', { disable: false, allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    host: '192.168.0.152',
    historyApiFallback: true,
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false
    }
  }
}
