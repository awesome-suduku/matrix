<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-06-28 09:49:47
 -->
<template>
  <tao-page>
    <tao-loading v-if="!is_ready" :color="'pink'"></tao-loading>
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
    const self = this;
    new wxHandler({
      debug: true,
      over: function() {
        self.is_ready = true;
      }
    }).execute();
  }
};
</script>
