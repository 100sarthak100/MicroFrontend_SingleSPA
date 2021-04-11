const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
var path = require('path');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "cardinalhealth",
    projectName: "main",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: path.join(__dirname, '.'),
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/react', {
                'plugins': ['@babel/plugin-proposal-class-properties']
              }]
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ]
    }
  });
};
