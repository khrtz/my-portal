const webpack = require("webpack")
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

const MODE = process.env.NODE_ENV || "development"
const DEV = MODE == "development"

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  entry: {
    main: [__dirname + "/src/index.tsx"]
  },
  output: {
    path: __dirname + "/public",
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: 'static/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto"
      }
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: __dirname + "/src/index.html",
        to: __dirname + "/public/index.html"
      },
      {
        from: __dirname + "/assets/**",
        to: __dirname + "/public"
      }
    ]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(MODE),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG || DEV)
    }),
  ]
}