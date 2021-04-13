/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-12 15:44:16
 * @LastEditors: lax
 * @LastEditTime: 2021-04-13 17:47:13
 * @FilePath: \suduku\src\utils\matrix.js
 */
// const Element = require("@/pojo/dancing/Element.js");

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
function getNumByEachRowMustHaveOneToNine(x, y) {
	return x * 9 + y + 81;
}
/**
 * 规则：每排必定包含1-9
 * @param {*} y
 * @param {*} el
 */
function getNumByEachColMustHaveOneToNine(x, y) {
	return x * 9 + y + 162;
}
/**
 * 规则：每宫格必定包含1-9
 * @param {*} x
 * @param {*} y
 * @param {*} el
 */
function getNumByEachPalaceMustHaveOneToNine(x, y) {
	// const palaceNum = Math.floor(x / 3) * 3 + Math.floor(y / 3) + 1;
	return x * 9 + y + 243;
}

function getRow(x, y, i) {
	const row = new Array(325);
	row.fill(0);
	row[getNumByEachBoxOnlyHaveOne(x, y)] = 1;
	row[getNumByEachRowMustHaveOneToNine(x, y)] = 1;
	row[getNumByEachColMustHaveOneToNine(x, y)] = 1;
	row[getNumByEachPalaceMustHaveOneToNine(x, y)] = 1;
	const result = { data: `${x}-${y}-${i}`, row };
	return result;
}

// function matrixLink(matrix) {
// 	matrix.map((rule, x) => {
// 		return rule.row.map((el, y, row) => {
// 			el.right = row[y === row.length - 1 ? 0 : y + 1];
// 			el.left = row[y === 0 ? row.length - 1 : y - 1];
// 			el.up = matrix[x === 0 ? matrix.length - 1 : x - 1][y];
// 			el.down = matrix[x === matrix.length - 1 ? 0 : x + 1][y];
// 			el.sup = x === 0;
// 			el.use = el === 1;
// 			el.name = x === 0 && y === 0 ? "head" : "el";
// 			el.x = row.x;
// 			el.y = row.y;
// 		});
// 	});
// }

/**
 * 九宫格转化为初步跳舞链核心盘，1代表有解
 */
function getMatrixBySuduku(suduku) {
	const result = [];
	suduku.map((row, x) => {
		row.map((el, y) => {
			const num = el ? 1 : 9;
			/**
			 * el有值=> 该格对应值可能性
			 * el无值=> 该格对应1-9可能性集合
			 */
			for (let i = 1; i <= num; i++) {
				const rule = getRow(x, y, i);
				result.push(rule);
			}
		});
	});
	// matrixLink(result);
	return result;
}

module.exports = { getMatrixBySuduku };
