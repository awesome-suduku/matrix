/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-08 19:31:35
 * @LastEditors: lax
 * @LastEditTime: 2020-10-08 21:59:13
 */
const Element = require("./Element");
class Stage {
	constructor(xy) {
		this.xy = xy;
		this.list = [];
		this.__init();
	}
	caculate() {
		const head = this.list[0][0];
		if (head.right == head) {
			return true;
		} else {
            const els = 
		}
	}
	__injectXY() {
		const result = [];
		this.xy.map((row, x) => {
			row.map((el, y) => {
				if (el) {
					const _row = [];
					_row[this.__getNumByEachBoxOnlyHaveOne(x, y)] = 1;
					_row[this.__getNumByEachRowMustHaveOneToNine(x, el)] = 1;
					_row[this.__getNumByEachColMustHaveOneToNine(y, el)] = 1;
					_row[this.__getNumByEachPalaceMustHaveOneToNine(x, y, el)] = 1;
					result.push(_row);
				} else {
					for (let i = 1; i <= 9; i++) {
						const _row = [];
						_row[this.__getNumByEachBoxOnlyHaveOne(x, y)] = 1;
						_row[this.__getNumByEachRowMustHaveOneToNine(x, i)] = 1;
						_row[this.__getNumByEachColMustHaveOneToNine(y, i)] = 1;
						_row[this.__getNumByEachPalaceMustHaveOneToNine(x, y, i)] = 1;
						result.push(_row);
					}
				}
			});
		});
		return result;
	}
	__init() {
		this.list = this.__injectXY().map((row, x) => {
			return row.map((el, y, row) => {
				return new Element({
					right: row[y == row.length - 1 ? 0 : y + 1],
					left: row[y == 0 ? row.length - 1 : y - 1],
					up: this.list[x == 0 ? this.list.length - 1 : x - 1][y],
					down: this.list[x == this.list.length - 1 ? 0 : x + 1][y],
					sup: x == 0 ? true : false,
					use: el == 1 ? true : false,
					name: x == 0 && y == 0 ? "head" : "el"
				});
			});
		});
		this.__clear();
	}
	__clear() {
		this.list.map(row => {
			row.map(el => {
				if (el.sup && !el.use) el.out();
			});
		});
	}
	__getNumByEachBoxOnlyHaveOne(x, y) {
		return x * 9 + y;
	}
	__getNumByEachRowMustHaveOneToNine(x, y, el) {
		return x * 9 + el + 81;
	}
	__getNumByEachColMustHaveOneToNine(y, el) {
		return y * 9 + el + 162;
	}
	__getNumByEachPalaceMustHaveOneToNine(x, y, el) {
		const palaceNum = Math.floor(x / 3) * 3 + Math.floor(y / 3) + 1;
		return (palaceNum - 1) * 9 + el + 243;
	}
}
module.exports = Stage;
