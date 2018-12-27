export default () => ([{
  test: /\.(webm|mp4)$/,
  rules: [
    {
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/assets/',
          name: 'videos/[name].[ext]?[hash]',
        },
      },
    },
  ],
}])
