<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-13 10:54:10
 -->
<template>
  <tao-Page>
    <tao-Loading v-if="!this.is_ready" :color="'pink'"></tao-Loading>
    <tao-Page v-show="false"></tao-Page>
  </tao-Page>
</template>

<script>
import { taoLoading, taoPage } from "fm93-vue-template";
import wxHandler from "vue-wx-tools";
export default {
  name: "Index",
  components: { taoLoading, taoPage },
  data: function() {
    return {
      is_ready: false
    };
  },
  created: function() {
    new wxHandler({
      server: "http://172.27.14.40:8001",
      debug: true,
      over: function() {
        this.is_ready = true;
      }
    }).execute();
  }
};
</script>
