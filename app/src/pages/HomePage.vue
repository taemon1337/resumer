<template>
  <div style='margin:7px;padding:7px;'>
    <div v-if='decrypted'>
      <div class='column'>
        <div class='container'>
          <d-app :id='siteid' :navbar='navbar' :layout='layout' :database='database' :routes='routes'></d-app>
        </div>
      </div>
    </div>
    <div v-else>
      <section class='hero'>
        <div class='hero-body'>
          <div class='container has-text-centered'>
            <h1 class='title'>Find and access sites</h1>
            <h2 class='subtitle'>Search below for a site and view it or unlock it if you have an access key...</h2>
            <form class='columns' @submit.prevent.stop='filter'>
              <div class='column is-one-third'></div>
              <div class='column is-one-third'>
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" placeholder="Find a repository">
                  </p>
                </div>
              </div>
              <div class='column is-one-third'>
                <span v-if="Object.keys(sites).length > filtered.length" class='tag is-light is-pulled-left'>
                  Showing {{ filtered.length }} of {{ Object.keys(sites).length }}
                  <button @click='search("")' class='delete is-small'></button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="columns">
        <div v-for='index in filtered' key='index' style='margin:7px;' class="column tile">
          <site-tile :site='getSiteByIndex(index)' :index='index' @activate='submit'></site-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SiteTile from '@/components/SiteTile'
  import DApp from '@/jsdb/components/DApp'
  import { DataTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'
  import { crypt } from '@/lib/crypt'

  export default {
    data () {
      return {
        filtered: []
      }
    },
    computed: {
      ...mapGetters({
        sites: DataTypes.sites,
        siteid: DataTypes.siteid,
        navbar: DataTypes.navbar,
        database: DataTypes.database,
        layout: DataTypes.layout,
        routes: DataTypes.routes,
        decrypted: DataTypes.decrypted
      })
    },
    methods: {
      getSiteByIndex (i) {
        return this.sites[i]
      },
      submit (e) {
        let index = e.target.elements[0].value
        let pwd = e.target.elements[1].value
        this.$store.dispatch(DataTypes.load, { index: index, password: pwd })
        e.target.reset()
      },
      filter (e) {
        let el = e.target.elements[0]
        this.filtered = this.search(el.value)
        el.value = ''
      },
      search (q) {
        let filtered = []
        for (let name in this.sites) {
          let text = JSON.stringify(this.sites[name])
          let regex = new RegExp(q, 'ig')
          if (text.match(regex)) {
            filtered.push(name)
          }
        }
        return filtered
      },
      searchById (id) {
        let filtered = []
        for (let name in this.sites) {
          if (this.sites[name].id === id) {
            filtered.push(name)
          }
        }
        return filtered
      }
    },
    created () {
      this.filtered = Array.apply(null, { length: this.sites.length }).map(Number.call, Number)
    },
    mounted () {
      let siteid = this.$route.params.siteid
      let accesskey = this.$route.params.accesskey
      if (siteid) {
        this.filtered = this.searchById(this.$route.params.siteid)
      }
      if (siteid && accesskey) {
        let secopts = { salt: '', password: siteid, iterations: 10000, keylen: 32, cipher: 'sha512' }
        // console.log(crypt.encrypt(accesskey, { algo: 'aes256', key: crypt.genkey(secopts) }))
        let deckey = crypt.decrypt(accesskey, { algo: 'aes256', key: crypt.genkey(secopts) })
        this.$store.dispatch(DataTypes.load, { index: this.filtered[0], password: deckey })
      }
    },
    components: {
      SiteTile,
      DApp
    }
  }
</script>
