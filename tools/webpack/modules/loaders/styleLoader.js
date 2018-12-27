import path from 'path'

import ExtractCssChunk from 'extract-css-chunks-webpack-plugin'
import autoprefixer from 'autoprefixer'

/**
 * Clean loaders,
 * - make sure no `null` is returned back to webpack
 *   as webpack does not support null values instead of loaders
 * @param {array} loaders
 */
const cleanLoaders = (loaders) => loaders.filter((loader) => loader)

/**
 * Style loader
 * - handle scss/css loading
 * @param {Object} param
 * @param {Object} param.extractChunk
 * @param {Object} param.webCoreResources
 */
export default ({ extractChunk = true, hash = true, resources = false } = {}) => {
  return [
    // Local loader
    // handle LOCAL scss and css files,
    // this allows us to have different settings for local and node_modules files
    {
      test: /\.(scss|css)$/,
      exclude: /node_modules\/(?!(@vfuk)\/).*/,
      use: cleanLoaders([
        extractChunk ? ExtractCssChunk.loader : null,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            sourceMap: true,
            modules: true,
            localIdentName: `vfuk-[name]__[local]${hash ? '__[hash:base64:5]' : ''}`,
            context: path.resolve(process.cwd()),
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            parser: 'postcss-scss',
            plugins: [
              autoprefixer({
                browsers: ['last 2 versions', 'IE >= 11', 'safari >= 10'],
              }),
            ],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ]),
    },
    // External loader
    // handle EXTERNAL(node_modules) scss and css files,
    // this allows us to have different settings for local and node_modules files
    // CSS and SASS loader for node_modules
    {
      test: /\.(scss|css)$/,
      include: /node_modules/,
      use: cleanLoaders([
        extractChunk ? ExtractCssChunk.loader : null,
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            parser: 'postcss-scss',
            plugins: [
              autoprefixer({
                browsers: ['last 2 versions', 'IE >= 11', 'safari >= 10'],
              }),
            ],
          },
        },
        {
          loader: 'sass-loader',
        },
      ]),
    },
  ]
}
