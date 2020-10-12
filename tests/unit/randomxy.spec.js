/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2020-10-12 14:52:42
 */
const randomXY = require("@/tools/randomXY.js");
const Stage = require("@/pojo/dancing/Stage.js");
describe("random 11", () => {
	it("get new", () => {
		const xy = randomXY();
		const stage = new Stage(xy);
		logger.warn(stage.list);
		// console.log(stage.__injectXY());
		expect(stage);
	});
});
