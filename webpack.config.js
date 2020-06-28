var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'docs')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'educational-buildings.html',
      template: './src/educational-buildings.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'savings-calculator.html',
      template: './src/savings-calculator.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/templates/header.html', to: './templates/header.html' }
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'images/'
           }
         }],
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        include: '/src/app.js',
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
