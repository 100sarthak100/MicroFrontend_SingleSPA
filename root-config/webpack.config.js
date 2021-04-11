const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "cardinalhealth";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader" }]
        }
      ]
    },
  });
};


// const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = env => ({
//   entry: path.resolve(__dirname, "src/root-config"),
//   output: {
//     filename: "root-config.js",
//     libraryTarget: "system",
//     path: path.resolve(__dirname, "dist")
//   },
//   devtool: "sourcemap",
//   module: {
//     rules: [
//       { parser: { system: false } },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: [{ loader: "babel-loader" }]
//       }
//     ]
//   },
//   devServer: {
//     historyApiFallback: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     },
//     disableHostCheck: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       inject: false,
//       template: "src/index.ejs",
//       templateParameters: {
//         isLocal: env && env.isLocal === "true"
//       }
//     }),
//     new CleanWebpackPlugin()
//   ],
//   externals: ["single-spa", /^@thawkin3\/.+$/]
// });
