/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-09-12 23:38:02
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 14:42:28
 */
function Box(p = {}) {
	// 宫块数值
	this.num = p.num || null;

	// 宫块横坐标
	this.x = p.x || null;

	// 宫块纵坐标
	this.y = p.y || null;

	// 宫块笔记
	this.flag = null;
}

module.exports = Box;
