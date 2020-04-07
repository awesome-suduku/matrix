<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-04-07 14:34:37
 * @LastEditors: lax
 * @LastEditTime: 2020-04-07 22:09:12
 -->
<template>
  <loading v-if="!this.is_load"></loading>
</template>

<script>
import loading from "vue-loading-page";
export default {
  name: "Index",
  components: { loading },
  data: function() {
    return {
      is_load: false
    };
  },
  created: function() {
    this.is_load = true;
  }
};
</script>
