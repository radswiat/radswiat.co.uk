// private loader
// only local use allowed, therefore _ in the name
export default () => [{
  // Fallback file loader
  // it will match all not matched files!
  // ANY loader below this point WILL BE IGNORED!
  exclude: [/\.js$/, /\.html$/, /\.json$/, /\.css$/],
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[ext]',
  },
}]
