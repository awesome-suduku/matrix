<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-08 23:15:37
 -->
<template>
  <tao-Loading v-if="!this.is_ready" :color="'pink'"></tao-Loading>
</template>

<script>
import { taoLoading } from "fm93-vue-template";
export default {
  name: "Index",
  components: { taoLoading },
  data: function() {
    return {
      is_ready: false
    };
  },
  created: function() {
    // this.is_ready = true;
  }
};
</script>
