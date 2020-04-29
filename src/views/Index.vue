<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-29 17:22:01
 -->
<template>
  <tao-page>
    <tao-loading v-if="!this.is_ready" :color="'pink'"></tao-loading>
    <tao-page v-show="false"></tao-page>
  </tao-page>
</template>

<script>
import wxHandler from "vue-wx-tools";
export default {
  name: "Index",
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
