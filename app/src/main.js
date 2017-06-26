// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vue2Filters from 'vue2-filters'

import jsdb from '@/jsdb'

window.init = function () {
  jsdb.init(jsdb.routes, jsdb.store, jsdb.components)
}

Vue.use(Vue2Filters)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
