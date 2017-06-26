import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import routes from './routes'
import store from './store'
import comps from './components'

Vue.use(Router)
Vue.use(Vuex)

let injectComponents = function (routes, components) {
  let injectedroutes = []
  routes.forEach(function (route) {
    if (route.component && typeof route.component === 'string' && components[route.component]) {
      injectedroutes.push(Object.assign({}, route, { component: components[route.component] }))
    }
  })

  return injectedroutes
}

let registerComponents = function (comps) {
  for (let key in comps) { Vue.component(key, comps[key]) }
  return comps
}

let init = function (routes, store, components) {
  let router = new Router({ routes: injectComponents(routes, components) })
  let vuexstore = new Vuex.Store({ modules: store })

  window.app = new Vue({
    el: '#jsdb',
    router,
    store: vuexstore,
    template: '<DApp/>',
    components: registerComponents(components)
  })
}

export default {
  init: init,
  store: store,
  components: comps,
  routes: routes
}
