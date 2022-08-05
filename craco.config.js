const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@font-size-base": "14px",
          "@border-radius-base": "4px",
        },
      },
    },
  ],
};
