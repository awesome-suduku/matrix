/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2020-10-12 14:50:33
 */
const randomXY = require("@/tools/randomXY.js");
describe("random 11", () => {
	it("get new", () => {
		const xy = randomXY();
		logger.info(xy);
		expect(xy);
	});
});
