import webpack from "webpack";

import webpackConfig from "./webpack.aws";

const compiler = webpack(webpackConfig);
compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  }
});
