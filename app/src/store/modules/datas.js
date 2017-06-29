import { DataTypes, MessageTypes } from '../mutation-types'
import store from '@/store'
import { crypt } from '@/lib/crypt'
import inject from '@/lib/inject'

const currentDefault = {
  id: null,
  navbar: {},
  layout: {},
  routes: [],
  templates: {},
  database: {}
}

const state = {
  sites: [
    require('@/assets/about.crypt.js'),
    require('@/assets/demo.crypt.js'),
    require('@/assets/tps.crypt.js')
  ],
  decrypted: false,
  current: Object.assign({}, currentDefault)
}

// getters
const getters = {
  [DataTypes.sites]: state => state.sites,
  [DataTypes.siteid]: state => state.current.id,
  [DataTypes.database]: state => state.current.database,
  [DataTypes.decrypted]: state => state.decrypted,
  [DataTypes.layout]: state => inject.inject(state.current.layout, state.current.database, state.current.templates),
  [DataTypes.routes]: state => state.current.routes,
  [DataTypes.templates]: state => state.current.templates,
  [DataTypes.navbar]: state => inject.inject(state.current.navbar, state.current.database, state.current.templates)
}

// actions
const actions = {
  [DataTypes.init] ({ commit }) {
    let currentkey = sessionStorage.getItem('currentKey')
    let accesskey = sessionStorage.getItem('currentToken')
    if (currentkey) {
      commit(DataTypes.load, { index: currentkey, password: accesskey })
    }
  },
  [DataTypes.load] ({ commit }, opts) {
    commit(DataTypes.load, opts)
  },
  [DataTypes.lock] ({ commit }) {
    commit(DataTypes.lock)
  }
}

// mutations must be synchronous
const mutations = {
  [DataTypes.load] (state, opts) {
    try {
      store.dispatch(MessageTypes.clear)
      let merged = Object.assign({}, state.sites[opts.index])
      if (opts.password) { merged.secure = Object.assign({}, merged.secure, { password: opts.password }) }
      console.log('merged', merged)
      let json = crypt.loader(merged, true)
      state.current = JSON.parse(json)
      state.decrypted = true
      sessionStorage.setItem('currentKey', opts.index)
      sessionStorage.setItem('currentToken', opts.password)
    } catch (err) {
      store.dispatch(MessageTypes.add, { title: 'Error: are you sure that is the correct access token?', class: 'notification is-danger', content: err.toString() })
      store.dispatch(DataTypes.lock)
    }
  },
  [DataTypes.lock] (state) {
    state.current = Object.assign({}, currentDefault)
    state.decrypted = false
    sessionStorage.removeItem('currentKey')
    sessionStorage.removeItem('currentToken')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
