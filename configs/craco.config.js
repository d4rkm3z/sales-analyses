const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'antd.customize.less'),
      },
    },
  ],
  style: {
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
    },
  },
};
