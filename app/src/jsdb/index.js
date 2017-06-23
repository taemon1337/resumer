import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import db from './db'
import layout from './layout'
import comps from './components'
import routes from './routes'

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

let init = function (layout, routes, data, components) {
  let router = new Router({ routes: injectComponents(routes, components) })
  let store = new Vuex.Store({ modules: data })

  window.app = new Vue({
    el: layout.element,
    router,
    store,
    template: layout.template,
    components: components
  })
}

export default {
  init: init,
  database: db,
  layout: layout,
  components: comps,
  routes: routes
}
