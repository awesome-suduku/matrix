/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-12 10:51:53
 * @LastEditors: lax
 * @LastEditTime: 2020-10-12 10:53:47
 */
const logger = require("consola");
logger.pauseLogs();

module.exports = logger;

global.logger = logger;
