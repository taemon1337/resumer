<template>
  <div class='columns'>
    <div :id='id'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex, { mapGetters } from 'vuex'
  import Router from 'vue-router'
  import components from '@/jsdb/components'

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

  registerComponents(components)

  export default {
    name: 'DApp',
    props: {
      id: {
        type: String,
        default: 'app'
      },
      components: {
        type: Array
      },
      layout: {
        type: Object,
        required: true
      },
      database: {
        type: Object,
        required: true
      },
      routes: {
        type: Array,
        default () {
          return [{ path: '/', name: 'home', component: 'DLayout' }]
        }
      }
    },
    data () {
      return {}
    },
    mounted () {
      let self = this
      let selector = '#' + this.id
      let router = new Router({ routes: injectComponents(this.routes, components) })
      let store = new Vuex.Store({
        getters: {
          database: function () { return self.database },
          layout: function () { return self.layout }
        },
        modules: {
          database: this.database,
          layout: this.layout
        }
      })
  
      window.app = new Vue({
        el: selector,
        router: router,
        store: store,
        template: '<DLayout/>',
        propsData: {
          layout: self.layout,
          database: self.database,
          computed: {
            ...mapGetters({
              layout: 'layout',
              database: 'database'
            })
          }
        }
      })
    }
  }
</script>
