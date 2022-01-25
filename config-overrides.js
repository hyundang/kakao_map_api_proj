const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components/*': path.resolve(__dirname, 'src/components/*'),
    '@pages/*': path.resolve(__dirname, 'src/pages/*'),
    '@apis/*': path.resolve(__dirname, 'src/apis/*'),
    '@libs/*': path.resolve(__dirname, 'src/libs/*'),
    '@modules/*': path.resolve(__dirname, 'src/modules/*'),
    '@interfaces/*': path.resolve(__dirname, 'src/interfaces/*'),
  }),
);