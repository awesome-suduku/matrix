/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-04-12 17:21:48
 */
const randomXY = require("@/tools/randomXY.js");
const {expect} = require('chai');
describe("random base suduku", () => {
	it("get new", () => {
		const xy = randomXY();
		console.log(123)
		expect(xy);
	});
});
