const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'docs')
  },
  optimization: {
   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
 },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'educational-buildings.html',
      template: './src/educational-buildings.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'savings-calculator.html',
      template: './src/savings-calculator.html',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'content.html',
      template: './src/content.html',
      minify: false
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/templates/header.html', to: './templates/header.html' },
        { from: './src/templates/footer.html', to: './templates/footer.html' }
      ],
    }),
    new MiniCssExtractPlugin({
     filename: "main.[contentHash].css"
   })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
           MiniCssExtractPlugin.loader, {
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
         use: [
           {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'images/',
             publicPath: './images/'
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
  },
};
