import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import webpackConfig from './webpack.dev'

const config = {
  contentBase: './dist',
  historyApiFallback: true,
  publicPath: '/',
  hot: true,
  noInfo: false,
  quiet: false,
}

const server = new WebpackDevServer(webpack(webpackConfig), config)
server.listen(8000, () => { })
