/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-06-28 11:44:38
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// load vant
// import Vant from "vant";
// import "vant/lib/index.css";
// Vue.use(Vant);

// load video.js
// import "video.js/dist/video-js.css";

// load Tao
import Tao from "fm93-vue-template";
import "fm93-vue-template/lib/tao.css";
Vue.use(Tao);
// eslint-disable-next-line
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
