/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2020-10-14 09:33:05
 */
const randomXY = require("@/tools/randomXY.js");
const Stage = require("@/pojo/dancing/Stage.js");
describe("random 11", () => {
	it("get new", () => {
		const xy = randomXY();
		const stage = new Stage(xy);
		stage.caculate();
		logger.warn(stage.ans);
		expect(stage);
	});
});
