<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-06-29 21:36:17
 -->
<template>
  <tao-container>
    <tao-music v-show="display"></tao-music>
    <tao-loading v-if="!is_ready" :color="'pink'"></tao-loading>
    <tao-page v-show="false"></tao-page>
  </tao-container>
</template>

<script>
import wxHandler from "vue-wx-tools";
export default {
  name: "Index",
  data: function() {
    return {
      is_ready: false,
      display: false
    };
  },
  created: function() {
    const self = this;
    new wxHandler({
      debug: !self.env,
      over: function() {
        self.is_ready = true;
        self.display = true;
      }
    }).execute();
  }
};
</script>
