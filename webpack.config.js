/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-12 16:44:57
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 17:05:53
 * @FilePath: \suduku\webpack.config.js
 */
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    resolve: {
        // 设置别名
        alias: {
            '@': resolve("src")
        }
    },
	mode: 'development'
};
