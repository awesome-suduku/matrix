/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-04-12 15:44:16
 * @LastEditors: lax
 * @LastEditTime: 2021-04-14 12:35:58
 * @FilePath: \suduku\src\utils\matrix.js
 */

/**
 * 规则：每个宫格仅有一个数字
 * [0,0]...[0,8]
 * ...
 * [8,0]...[8,8]
 * @param {*} x
 * @param {*} y
 */
function getNumByEachBoxOnlyHaveOne(x, y) {
	return x * 9 + y;
}
/**
 * 规则：每行必定包含1-9
 * row0-num1...row0-num9
 * ...
 * row8-num1...row8-num9
 * @param {*} x
 * @param {*} i
 */
function getNumByEachRowMustHaveOneToNine(x, i) {
	return x * 9 + i + 80;
}
/**
 * 规则：每排必定包含1-9
 * col0-num1...col0-num9
 * ...
 * col8-num1...col8-num9
 * @param {*} y
 * @param {*} i
 */
function getNumByEachColMustHaveOneToNine(y, i) {
	return y * 9 + i + 161;
}
/**
 * 规则：每宫格必定包含1-9
 * palace0-num1...palace0-num9
 * ...
 * palace0-num1...palace0-num9
 * @param {*} x
 * @param {*} y
 * @param {*} i
 */
function getNumByEachPalaceMustHaveOneToNine(x, y, i) {
	const palace = Math.floor(x / 3) * 3 + Math.floor(y / 3);
	return palace * 9 + i + 242;
}

function getRow(x, y, i, callback) {
	const row = new Array(324).fill(0);
	row[getNumByEachBoxOnlyHaveOne(x, y)] = 1;
	row[getNumByEachRowMustHaveOneToNine(x, i)] = 1;
	row[getNumByEachColMustHaveOneToNine(y, i)] = 1;
	row[getNumByEachPalaceMustHaveOneToNine(x, y, i)] = 1;
	return callback(x, y, i, row);
}

function DEFAULT_CALLBACK(x, y, i, row) {
	return { data: `${x}-${y}-${i}`, x, y, i, row };
}

/**
 * @function getMatrixBySuduku
 * @description 将数独转化为矩阵对象
 * @param {Array} suduku 二维数组或类数组
 * @param {Function} callback 返回的值
 * @returns
 */
function getMatrixBySuduku(suduku, callback = DEFAULT_CALLBACK) {
	return suduku.reduce((next, row, x) => {
		return next.concat(
			row.reduce((acc, el, y) => {
				// 已有值,对应唯一解
				if (el) {
					acc.push(getRow(x, y, el, callback));
					return acc;
				}
				// 值未知,列出全部解
				return acc.concat(
					new Array(9).fill({}).map((obj, i) => {
						return getRow(x, y, i + 1, callback);
					})
				);
			}, [])
		);
	}, []);
}

module.exports = { getMatrixBySuduku };
