var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
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
