const merge = require("webpack-merge");
const baseWebpack = require("./webpack.config.base");

module.exports = merge.smart(baseWebpack, {
  mode: "development",
  devServer: {
    port: 9000,
  },
});
