import path from "path";
import webpack from "webpack";
import FriendlyErrorsPlugin from "friendly-errors-webpack-plugin";
import ErrorOverlayPlugin from "error-overlay-webpack-plugin";
import SimpleProgressWebpackPlugin from "simple-progress-webpack-plugin";
import WebpackVisualizerPlugin from "webpack-visualizer-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractCssChunk from "extract-css-chunks-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

import babelLoader from "../modules/loaders/babelLoader";
import fontLoader from "../modules/loaders/fontLoader";
import styleLoader from "../modules/loaders/styleLoader";
import svgLoader from "../modules/loaders/svgLoader";
import fallbackLoader from "../modules/loaders/_fallbackLoader";

const abs = file => {
  return path.resolve(process.cwd(), file);
};

export default {
  mode: "production",

  entry: [
    "core-js/fn/promise",
    "core-js/fn/array",
    "core-js/fn/object/assign",
    "core-js/fn/object/keys",
    "core-js/fn/string/includes",
    "core-js/es6/string",
    "core-js/fn/number/is-integer",
    abs("src/index.js"),
  ],

  output: {
    path: abs("dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].chunk.js",
    publicPath: "./"
  },

  module: {
    // makes missing exports an error instead of warning
    strictExportPresence: true,
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will match
        oneOf: [
          // Any files with a .js and .jsx extension (excluding node_modules)
          // Load with babel-loader (this converts files down to vanilla javascript)
          // .babelrc config is used here
          ...babelLoader(),
          ...styleLoader({ hash: false }),
          ...fontLoader(),
          ...svgLoader(),
          ...fallbackLoader()
        ]
      }
      // ** STOP ** Are you adding a new loader?
      // Make sure to add the new loader(s) before the "Fallback file loader" loader.
    ]
  },

  plugins: [
    new SimpleProgressWebpackPlugin({
      format: "compact"
    }),
    new HtmlWebpackPlugin({
      // assetUrl: process.env.ASSET_URL || 'http://localhost:6181/sites/shop/assets',
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: abs('src/assets'),
        to: './assets',
      },
    ]),
    // Extract CSS from chunks into multiple stylesheets + HMR
    // https://github.com/faceyspacey/extract-css-chunks-webpack-plugin
    new ExtractCssChunk({
      filename: "[name].css",
      chunkFilename: "[id].css",
      hot: true,
      cssModules: true
    })
  ]
};
