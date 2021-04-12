/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-08 19:24:37
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 14:35:27
 */
class Element {
	constructor(p = {}) {
		this.right = p.right || null;
		this.left = p.left || null;
		this.up = p.up || null;
		this.down = p.down || null;
		this.value = p.value || 0;
		this.sup = p.sup == undefined ? false : p.sup;
		this.use = p.use == undefined ? false : p.use;
		this.name = p.name || "";
		this.x = p.x || null;
		this.y = p.y || null;
	}
	out() {
		this.left.right = this.right;
		this.right.left = this.left;
		this.up.down = this.down;
		this.down.up = this.up;
		this.use = false;
	}
	in() {
		this.left.right = this;
		this.right.left = this;
		this.up.down = this;
		this.down.up = this;
		this.use = true;
	}
	activate() {
		this.value = 1;
	}
	check(el) {
		if (el.x == this.x && el.y == this.y) return true;
		return false;
	}
}

module.exports = Element;
