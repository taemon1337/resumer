<template>
  <div style='margin:7px;padding:7px;'>
    <div v-if='decrypted'>
      <div v-if='pages.jsdb' class='column'>
        <div class='container'>
          <d-app :id='pages.id' :layout='pages.layout' :database='pages.data' :routes='pages.routes'></d-app>
        </div>
      </div>
    </div>
    <div v-else>
      <section class='hero is-info'>
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
                <span v-if="Object.keys(sites).length > filtered.length" class='tag is-warning is-pulled-left'>
                  Showing {{ filtered.length }} of {{ Object.keys(sites).length }}
                  <button @click='search("")' class='delete is-small'></button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div class="columns">
        <div v-for='(name, index) in filtered' key='index' style='margin:7px;' class="column tile">
          <site-tile :site='sites[name]' :name='name' @activate='submit'></site-tile>
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

  export default {
    data () {
      return {
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
      }
    },
    created () {
      this.filtered = Object.keys(this.sites)
    },
    components: {
      SiteTile,
      DApp
    }
  }
</script>
