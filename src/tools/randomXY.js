/*
 * @Description: 随机生成11个已知的九宫格
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-10-08 19:58:55
 * @LastEditors: lax
 * @LastEditTime: 2020-10-12 11:27:37
 */
module.exports = () => {
	// 宫格值
	const valueList = [];
	for (let i = 0; i < 11; i++) {
		valueList.push(Math.floor(Math.random() * 9 + 1));
	}
	// 宫格坐标
	const numList = [];
	for (let i = 0; i < 11; i++) {
		numList.push({
			x: Math.floor(Math.random() * 9 + 1) - 1,
			y: Math.floor(Math.random() * 9 + 1) - 1
		});
	}
	const result = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	numList.map((xy, i) => {
		result[xy.x][xy.y] = valueList[i];
	});
	return result;
};
