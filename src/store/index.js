/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 19:56:56
 * @LastEditors: lax
 * @LastEditTime: 2020-06-29 21:28:01
 */
import Vue from "vue";
import Vuex from "vuex";

const modules = {};
const selects = require.context("./modules/", true, /\.js$/);
selects.keys().forEach((select) => {
	modules[getName(select)] = selects(select).default;
	console.log(modules);
});
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules,
});

function getName(str, is = true) {
	const p = "./";
	let name = str.slice(str.indexOf(p) + 2, str.indexOf(".js"));
	if (is) name = name.toLowerCase();
	return name;
}
