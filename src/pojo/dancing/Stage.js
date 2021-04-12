/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-08 19:31:35
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 16:04:21
 */
const {getMatrixBySuduku} = require("@/utils/matrix.js")
class Stage {
	constructor(xy) {
		// 九宫格
		this.xy = xy;
		// 跳舞链盘
		this.list = [];
		this.__init();
		this.head = this.list[0][0];
		this.ans = [];
	}
	calculate() {
		this.__dancing();
	}
	__dancing() {
		// 获取head.right
		const next = this.head.right;
		if (next.check(this.head)) return true;

		// 标记right
		const nextTaps = this.__tap(next.y);
		if (next.check(next.down)) return false;

		nextTaps.map(row => {
			// 获取right第一序列
			const nextFirst = row[0];

			// 标记该第一序列同行其余元素的列首元素
			const nextFirstTaps = this.__tapByRow(nextFirst);

			// 得到子跳舞链盘
			if (this.__dancing()) {
				return true;
			} else {
				// 返回该元素同行的其余元素所在的列首元素
				this.__tapback(nextFirstTaps);
				this.ans.push(nextFirst);
			}
		});
		this.__tapback(nextTaps);
		return false;
	}
	/**
	 * 每个元素转换为元素对象引用自身周围
	 */
	__init() {
		const dance = getMatrixBySuduku(this.xy);
		dance.map((row, x) => {
			return row.map((el, y, row) => {
				el.right = row[y == row.length - 1 ? 0 : y + 1];
				el.left = row[y == 0 ? row.length - 1 : y - 1];
				el.up = dance[x == 0 ? dance.length - 1 : x - 1][y];
				el.down = dance[x == dance.length - 1 ? 0 : x + 1][y];
				el.sup = x == 0 ? true : false;
				el.use = el == 1 ? true : false;
				el.name = x == 0 && y == 0 ? "head" : "el";
				el.x = x;
				el.y = y;
			});
		});
		this.list = dance;
		this.__clear();
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
	 * 标记元素
	 * @param {*} col
	 */
	__tap(col) {
		return this.list.filter((row, y) => {
			// 仅返回标记元素所在列其他元素的行集合中已使用的元素
			if (col == y) {
				return row.filter(el => {
					if (!el.sup && el.use) {
						el.out();
						return true;
					}
				});
			}
		});
	}
	/**
	 * 标记该元素所在行剩余元素的首列元素
	 * @param {*} first
	 */
	__tapByRow(first) {
		return this.list[first.x].reduce((el, next) => {
			if (next.y != first.y) {
				return el.concat(this.__tap(next.y));
			} else {
				return el;
			}
		}, {});
	}
	/**
	 * 回标元素集合
	 * @param {*} list
	 */
	__tapBack(list) {
		list.map(row => {
			row.map(el => {
				el.in();
			});
		});
	}
}
module.exports = Stage;
