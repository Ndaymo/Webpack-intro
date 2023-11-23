const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, 'public'),
        },
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },{ 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        ]
      }, 

    plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};