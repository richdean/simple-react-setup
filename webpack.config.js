import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    // 'webpack-hot-middleware/client?reload=true',
    './src/main.js',
  ],
  target: 'web',
  output: {
    path: './dist',
    // publicPath: 'http://localhost:8080/',
    filename: 'bundle.js',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      // {test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000'},
      // {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      // {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
      // {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      // {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
    ],
  },
};
