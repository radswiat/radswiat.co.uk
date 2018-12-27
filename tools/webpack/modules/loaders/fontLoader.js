export default () => ([{
  test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  include: /fonts\/*/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]?[hash]',
    },
  },
}]
)
