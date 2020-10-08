/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-08 19:24:37
 * @LastEditors: lax
 * @LastEditTime: 2020-10-08 22:04:51
 */
class Element {
	constructor(p = {}) {
		this.right = p.right;
		this.left = p.left;
		this.up = p.up;
		this.down = p.down;
		this.ans = null;
		this.sup = p.sup;
		this.use = p.use;
		this.name = p.name;
	}
	out() {
		this.left.right = this.right;
		this.right.left = this.left;
		this.up.down = this.down;
		this.down.up = this.up;
		this.use = false;
	}
	link() {}
}

export default Element;
