<template>
  <div style='margin:7px;padding:7px;'>
    <section v-if='!decrypted' class='hero is-info'>
      <div class='hero-body'>
        <div class='container has-text-centered'>
          <h1 class='title'>Find and access sites</h1>
          <h2 class='subtitle'>Search below for a site and view it or unlock it if you have an access key...</h2>
          <form class='columns' @submit.prevent.stop='filter'>
            <div class='column is-one-third'></div>
            <div class='column is-one-third'>
              <div class="field has-addons">
                <p class="control">
                  <input v-bind='query' class="input" type="text" placeholder="Find a repository">
                </p>
                <p class="control">
                  <button type='submit' class="button is-info">Search</button>
                </p>
              </div>
            </div>
            <div class='column is-one-third'></div>
          </form>
        </div>
      </div>
    </section>
    <div class="columns">
      <div v-if='!decrypted' v-for='(name, index) in filtered' key='index' style='margin:7px;' class="column tile">
        <site-tile :site='site' :name='name' @activate='submit'></site-tile>
      </div>
      <div v-else>
        <div v-if='pages.jsdb' class='column'>
          <div class='container'>
            <d-app :id='pages.id' :layout='pages.layout' :database='pages.data' :routes='pages.routes'></d-app>
          </div>
        </div>
        <div v-else class='container'>
          <render-pages :pages='pages'></render-pages>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RenderPages from '@/components/RenderPages'
  import SiteTile from '@/components/SiteTile'
  import DApp from '@/jsdb/components/DApp'
  import { DataTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        query: '',
        filtered: []
      }
    },
    computed: {
      ...mapGetters({
        sites: DataTypes.all,
        pages: DataTypes.pages,
        decrypted: DataTypes.decrypted
      })
    },
    methods: {
      submit (e) {
        let name = e.target.elements[0].value
        let pwd = e.target.elements[1].value
        this.$store.dispatch(DataTypes.load, { name: name, password: pwd })
        e.target.reset()
      },
      filter (e) {
        let query = e.target.elements[0].value
        console.log('searching for ' + query + '...')
        window.sites = this.sites
        e.target.elements[0].value = ''
      },
      search (q) {
        let filtered = {}
        for (let name in this.sites) {
          let text = JSON.stringify(this.sites[name])
          if (text.match(q)) {
            filtered[name]
          }
        }
        return filtered
      }
    },
    created () {
      this.filtered = Object.keys(this.sites)
    },
    components: {
      RenderPages,
      SiteTile,
      DApp
    }
  }
</script>
