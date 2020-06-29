/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-06-29 20:41:01
 * @LastEditors: lax
 * @LastEditTime: 2020-06-29 20:44:28
 */
export default {
  namespaced: true,
  state: {
    data: 123
  },
  getters: {
    getData: state => {
      return state.data;
    }
  },
  actions: {},
  mutations: {}
};
