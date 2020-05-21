// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'
import Http from '@/utils/ajax'
import '@/assets/css/datav.css'
import '@/assets/css/base.css'
import "@/assets/css/index.css";
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.prototype.$http = Http;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
