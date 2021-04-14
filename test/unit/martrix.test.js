/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-04-13 23:42:37
 */
const suduku = require("@test/data/suduku.js");
const { getMatrixBySuduku } = require("@/utils/matrix.js");
const expect = require("chai").expect;
const matrix = getMatrixBySuduku(suduku);
// const dlx = require("dancing-links");

const selects = suduku.reduce((acc, row, x) => {
	return acc.concat(
		row
			.map((el, y) => {
				if (el !== 0) return { x, y };
			})
			.filter(el => {
				if (el) return true;
			})
	);
}, []);

describe("suduku to matrix", function() {
	selects.map(({ x, y }) => {
		it(`[ ${x},${y} ] have value`, function() {
			const index = x * 9 + y;
			const rule = matrix.filter(each => {
				if (x === each.x && y === each.y) return true;
			})[0];
			expect(rule.row[index]).to.be.equals(1);
		});
	});
});
