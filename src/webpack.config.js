const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,  
        use: [
          'file-loader',
        ],
      },
    ],
  },

  // Cấu hình cho DevServer (tùy chọn)
  devServer: {
    contentBase: './dist',
    port: 3000,
  },

  devtool: 'source-map',
};
