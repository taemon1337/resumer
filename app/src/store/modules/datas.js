import { DataTypes, MessageTypes } from '../mutation-types'
import store from '@/store'
import cryptor from '@/lib/cryptor'

const defaultindex = 0

const state = {
  all: [
    require('@/assets/demo.secure.json'),
    require('@/assets/tps.secure.json')
  ],
  current: defaultindex,
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
  [DataTypes.pages]: state => state.data.pages,
  [DataTypes.decrypted]: state => state.decrypted
}

// actions
const actions = {
  [DataTypes.init] ({ commit }) {
    commit(DataTypes.init, state)
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
      let merged = Object.assign({}, state.all[opts.index])
      if (opts.password) { merged.secure = Object.assign({}, { password: opts.password }) }
      let json = cryptor.loader(JSON.stringify(merged), true)
      state.data = JSON.parse(json)
      state.decrypted = true
      store.dispatch(MessageTypes.add, { title: 'Successfully unlocked site data!', class: 'notification is-success' })
    } catch (err) {
      store.dispatch(MessageTypes.add, { title: 'Error: are you sure that is the correct access token?', class: 'notification is-danger', content: err.toString() })
    }
  },
  [DataTypes.lock] (state) {
    state.data = state.all[defaultindex]
    state.decrypted = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
