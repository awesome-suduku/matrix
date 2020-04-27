/*
 * @Description: vue配置模板文件
 * @Version: 1.1.0
 * @Autor: lax
 * @Date: 2020-04-01 12:54:53
 * @LastEditors: lax
 * @LastEditTime: 2020-04-28 00:08:40
 */
module.exports = {
  /* vue 断点 */
  configureWebpack: {
    devtool: "source-map"
  },
  /* 设置build的引用文件路径 */
  publicPath: "./",
  /* 取消文件名hash值 */
  filenameHashing: false,
  /**
   * 自定义file-loader
   * html图片访问格式调整：[name].[ext]?v=[hash:6]
   * like: content.png?v=s2421a
   */
  chainWebpack: config => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]?v=[hash:6]"
      });
  }
};
