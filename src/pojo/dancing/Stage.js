/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-08 19:31:35
 * @LastEditors: lax
 * @LastEditTime: 2020-10-10 17:37:02
 */
const Element = require("./Element");
class Stage {
	constructor(xy) {
		// 九宫格
		this.xy = xy;
		// 跳舞链盘
		this.list = [];
		this.__init();
		this.head = this.list[0][0];
	}
	caculate() {
		
	}
	__dancing(){
		if (this.head.right == head) return true;
		// 标记right
		// 暂存right序列一
		// 标记序列一同行的其余元素的列首元素
		if(this.__dancing()){
				return true;
		}else{
				// 返回该元素同行的其余元素所在的列首元素
		};
	}
	/**
	 * 每个元素转换为元素对象引用自身周围
	 */
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
	/**
	 * 九宫格转化为初步跳舞链核心盘，1代表有解
	 */
	__injectXY() {
		const result = [];
		this.xy.map((row, x) => {
			row.map((el, y) => {
				// 该宫格有值
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
	/**
	 * 清除所有空对象
	 */
	__clear() {
		this.list.map(row => {
			row.map(el => {
				if (el.sup && !el.use) el.out();
			});
		});
	}
	/**
	 * 规则：每个宫格仅有一个数字
	 * @param {*} x 
	 * @param {*} y 
	 */
	__getNumByEachBoxOnlyHaveOne(x, y) {
		return x * 9 + y;
	}
	/**
	 * 规则：每行必定包含1-9
	 * @param {*} x 
	 * @param {*} y 
	 * @param {*} el 
	 */
	__getNumByEachRowMustHaveOneToNine(x, y, el) {
		return x * 9 + el + 81;
	}
	/**
	 * 规则：每排必定包含1-9
	 * @param {*} y 
	 * @param {*} el 
	 */
	__getNumByEachColMustHaveOneToNine(y, el) {
		return y * 9 + el + 162;
	}
	/**
	 * 规则：每工宫格必定包含1-9
	 * @param {*} x 
	 * @param {*} y 
	 * @param {*} el 
	 */
	__getNumByEachPalaceMustHaveOneToNine(x, y, el) {
		const palaceNum = Math.floor(x / 3) * 3 + Math.floor(y / 3) + 1;
		return (palaceNum - 1) * 9 + el + 243;
	}
}
module.exports = Stage;
