/*
 * @Description:
 * @Version: 1.0.0
 * @Autor: lax
 * @Date: 2020-06-29 20:29:55
 * @LastEditors: lax
 * @LastEditTime: 2020-06-29 20:30:37
 */
export default {
  data: function() {
    return {
      env: process.env.NODE_ENV === "production"
    };
  }
};
