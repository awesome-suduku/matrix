/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2020-10-10 17:07:52
 * @LastEditors: lax
 * @LastEditTime: 2021-04-14 12:50:29
 */
const suduku = require("@test/data/suduku.js");
const { getMatrixBySuduku } = require("@/utils/matrix.js");
const expect = require("chai").expect;

describe("diy getMatrixBySuduku result", function() {
	it(`result have properties diy`, function() {
		const matrix = getMatrixBySuduku(suduku, (x, y, i, row) => {
			return { data: `${x}-${y}-${i}`, diy: i, row };
		});
		expect(matrix[0].diy).to.exist;
	});
});
