import { DataTypes, MessageTypes } from '../mutation-types'
import store from '@/store'
import crypt from '@/lib/crypt'

const state = {
  all: {
    demo: require('@/assets/demo.crypt.js'),
    tps: require('@/assets/tps.crypt.js')
  },
  data: {
    navbar: {},
    user: {},
    github: {},
    twitter: {}
  },
  decrypted: false
}

// getters
const getters = {
  [DataTypes.all]: state => state.all,
  [DataTypes.navbar]: state => state.data.navbar,
  [DataTypes.user]: state => state.data.user,
  [DataTypes.github]: state => state.data.github,
  [DataTypes.twitter]: state => state.data.twitter,
  [DataTypes.pages]: state => state.data.pages || state.data,
  [DataTypes.decrypted]: state => state.decrypted
}

// actions
const actions = {
  [DataTypes.init] ({ commit }) {
    let currentkey = sessionStorage.getItem('currentKey')
    let accesskey = sessionStorage.getItem('currentToken')
    if (currentkey) {
      commit(DataTypes.load, { name: currentkey, password: accesskey })
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
      let merged = Object.assign({}, state.all[opts.name])
      if (opts.password) { merged.secure = Object.assign({}, { password: opts.password }) }
      let json = crypt.loader(merged, true)
      let data = JSON.parse(json)
      state.data = Object.assign({}, data, data.data)
      state.decrypted = true
      sessionStorage.setItem('currentKey', opts.name)
      sessionStorage.setItem('currentToken', opts.password)
      store.dispatch(MessageTypes.add, { title: 'Successfully unlocked site data!', class: 'notification is-success' })
    } catch (err) {
      store.dispatch(MessageTypes.add, { title: 'Error: are you sure that is the correct access token?', class: 'notification is-danger', content: err.toString() })
    }
  },
  [DataTypes.lock] (state) {
    state.data = null
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
