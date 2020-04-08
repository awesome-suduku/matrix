<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-08 09:22:47
 -->
<template>
  <loading v-if="!this.is_load" :color="'pink'"></loading>
</template>

<script>
import loading from "fm93-vue-template";
export default {
  name: "Index",
  components: { loading },
  data: function() {
    return {
      is_load: false
    };
  },
  created: function() {
    this.is_load = false;
  }
};
</script>
