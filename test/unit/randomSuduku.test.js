/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 20:26:06
 */
const randomXY = require("@/tools/randomXY.js");
const {getMatrixBySuduku} = require("@/utils/matrix.js")
const expect = require('chai').expect;
describe("random base suduku", () => {
	it("get new", () => {
		const matrix = getMatrixBySuduku(randomXY());
		console.log(matrix)
		expect(matrix).to.be.equals(matrix);
	});
});
