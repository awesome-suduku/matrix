/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-29 17:22:18
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import Tao from "fm93-vue-template";

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueVideoPlayer);
Vue.use(Tao);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
