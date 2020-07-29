// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// 引用axios请求数据
import axios from "axios";

//ElementUI插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;

// 设置公共的axios地址，在其他页面引用时省略http
axios.defaults.baseURL = "http://localhost:3000/";

/* eslint-disable no-new */
new Vue({
  el: "#app",
 
  router,
  components: { App },
  template: "<App/>"
});
