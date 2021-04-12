/*
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-12 15:44:16
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 20:25:48
 * @FilePath: \suduku\src\utils\matrix.js
 */
const Element = require("@/pojo/dancing/Element.js");

/**
 * 规则：每个宫格仅有一个数字
 * @param {*} x
 * @param {*} y
 */
function getNumByEachBoxOnlyHaveOne(x, y) {
	return x * 9 + y;
}
/**
 * 规则：每行必定包含1-9
 * @param {*} x
 * @param {*} y
 * @param {*} el
 */
function getNumByEachRowMustHaveOneToNine(x, el) {
	return x * 9 + el + 81;
}
/**
 * 规则：每排必定包含1-9
 * @param {*} y
 * @param {*} el
 */
function getNumByEachColMustHaveOneToNine(y, el) {
	return y * 9 + el + 162;
}
/**
 * 规则：每宫格必定包含1-9
 * @param {*} x
 * @param {*} y
 * @param {*} el
 */
function getNumByEachPalaceMustHaveOneToNine(x, y, el) {
	const palaceNum = Math.floor(x / 3) * 3 + Math.floor(y / 3) + 1;
	return (palaceNum - 1) * 9 + el + 243;
}

function getRow(x,y,i){
	const row = new Array(325).fill(new Element());
	row[getNumByEachBoxOnlyHaveOne(x, y)].activate();
	row[getNumByEachRowMustHaveOneToNine(x, i)].activate();
	row[getNumByEachColMustHaveOneToNine(y, i)].activate();
	row[getNumByEachPalaceMustHaveOneToNine(x, y, i)].activate();
	return row;
}

/**
 * 九宫格转化为初步跳舞链核心盘，1代表有解
 */
function getMatrixBySuduku(suduku){
	const result = [];
	suduku.map((row, x) => {
			row.map((el, y) => {
				const num = el ? 1 : 9;
				/**
				 * el有值=> 该格对应值可能性
				 * el无值=> 该格对应1-9可能性集合
				 */
				for (let i = 1; i <= num; i++) {
					const row = getRow(x,y,i);
					result.push(row);
				}
			});
		});
		return result;
}

module.exports = {getMatrixBySuduku};




