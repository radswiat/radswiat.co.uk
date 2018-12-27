/**
 * Svg loader for handling JSX icons
 * - this will NOT work with CSS svg icons, and there is no way to make it work except url-loader,
 *   but DONT change this to url-loader as JSX requires svg-inline-loader.
 *   Just use your svg through JSX and react components
 * - exclude fonts folder due to conflict with font loader
 */
export default () => ([{
  test: /\.svg$/,
  exclude: /fonts\/*/,
  use: 'svg-inline-loader',
}]
)
