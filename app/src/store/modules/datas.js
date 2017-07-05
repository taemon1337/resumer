import { DataTypes, MessageTypes } from '../mutation-types'
import store from '@/store'
import { crypt } from '@/lib/crypt'
import inject from '@/lib/inject'
import parseJson from '@/lib/parseJson'

function findSiteIndex (sites, opts) {
  let index = opts.index || null
  if (opts.id) {
    for (let key in sites) {
      if (sites[key].id === opts.id) {
        index = key
      }
    }
  }
  return index
}

function findSecureOptions (data, opts) {
  if (data.secure) {
    if (opts.secure) {
      return opts.secure
    } else {
      return crypt.mergeoptions(data.secure, { password: opts.password })
    }
  } else {
    return data.secure
  }
}

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
  current: Object.assign({}, currentDefault),
  accesslink: ''
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
  [DataTypes.navbar]: state => inject.inject(state.current.navbar, state.current.database, state.current.templates),
  [DataTypes.accesslink]: state => state.accesslink
}

// actions
const actions = {
  [DataTypes.init] ({ commit }) {
    let encryptedOptions = sessionStorage.getItem('secureSettings')
    let siteid = sessionStorage.getItem('siteId')
    if (encryptedOptions) {
      let secure = parseJson(crypt.decrypt(encryptedOptions, { algo: 'aes256', key: siteid }))
      commit(DataTypes.load, { id: siteid, secure: secure })
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
      let index = findSiteIndex(state.sites, opts)
      let data = Object.assign({}, state.sites[index])
      let secopts = findSecureOptions(data, opts)
      let conf = Object.assign({}, data, { secure: secopts })
      let json = crypt.loader(conf, true) // decrypt site data
      state.current = JSON.parse(json)
      let encryptedOptions = crypt.encrypt(JSON.stringify(secopts), { algo: 'aes256', key: data.id })
      state.decrypted = true
      window.location.hash = ['#', data.id, encryptedOptions].join('/')
      sessionStorage.setItem('secureSettings', encryptedOptions)
      sessionStorage.setItem('siteId', data.id)
    } catch (err) {
      store.dispatch(MessageTypes.add, { title: 'Error: are you sure that is the correct access token?', class: 'notification is-danger', content: err.toString() })
      store.dispatch(DataTypes.lock)
    }
  },
  [DataTypes.lock] (state) {
    window.location.hash = ''
    state.current = Object.assign({}, currentDefault)
    state.decrypted = false
    sessionStorage.removeItem('secureSettings')
    sessionStorage.removeItem('siteId')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
