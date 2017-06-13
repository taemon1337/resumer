import { DataTypes } from '../mutation-types'
// import axios from 'axios'
import pbkdf2 from 'pbkdf2'

console.log('DATA ', require('@/assets/data.secure.json'))
console.log('IMG', require('@/assets/logo.png'))

// https://github.com/crypto-browserify/pbkdf2/blob/master/lib/sync.js
let key = pbkdf2.pbkdf2Sync('go', 'my-random-static-site-salt', 1, 64, 'sha512')
console.log('KEY: ', Buffer.from(key).toString('hex'))

// init state
const state = {
  navbar: {
    public: true,
    title: 'My Site',
    image: 'http://bulma.io/images/bulma-logo.png'
  },
  secure: {
    cipher: 'aes256',
    password: 'go'
  },
  user: {
    first: 'John',
    last: 'Tester'
  },
  github: {
    profile: 'https://github.com/'
  },
  twitter: {
    profile: 'https://twitter.com'
  }
}

// getters
const getters = {
  [DataTypes.all]: state => state,
  [DataTypes.navbar]: state => state.navbar,
  [DataTypes.user]: state => state.user,
  [DataTypes.github]: state => state.github,
  [DataTypes.twitter]: state => state.twitter
}

// actions
const actions = {
  [DataTypes.load] ({ commit }) {
    commit(DataTypes.load, state)
    // return axios.get('/static/data.json').then(function (resp) {
    //   commit(DataTypes.load, resp.data)
    // })
    // .catch(function (err) {
    //   console.warn('Error loading data...', err)
    // })
  }
}

// mutations must be synchronous
const mutations = {
  [DataTypes.load] (state, data) {
    if (data.user) { state.user = data.user }
    if (data.github) { state.github = data.github }
    if (data.twitter) { state.twitter = data.twitter }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
