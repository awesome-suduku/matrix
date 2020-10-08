/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-09-12 23:45:06
 * @LastEditors: lax
 * @LastEditTime: 2020-09-22 23:31:21
 */
function Palace() {
	this.boxs = null;
}

Palace.prototype = function checkBox(cbox) {
	let result = true;
	this.boxs.forEach((box, index) => {
		if (box.num === cbox.num) result = false;
	});
	return result;
};

module.exports = Palace;
