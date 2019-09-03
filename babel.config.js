
// * only used for antd custom theming
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import', {
        libraryName: 'antd',
        style: true
      }
    ]
  ]
}
