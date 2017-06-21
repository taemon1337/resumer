<template>
  <div>
    <nav class='nav has-shadow'>
      <div class='container'>
        <div class='nav-left nav-menu'>
          <a v-for='(page, key) in pages' key='key' :class='navItemClass(key)' @click='active=key'>
            {{ page.title || key | capitalize }}
          </a>
        </div>
      </div>
    </nav>
    <div>
      <div class='column' v-if='active'>
        <render-page :name='active' :page='pages[active]'></render-page>
      </div>
      <div v-else>
        Click a page to open it.
      </div>
    </div>
  </div>
</template>

<script>
  import RenderPage from '@/components/RenderPage'

  export default {
    name: 'RenderPages',
    props: {
      pages: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        active: null
      }
    },
    methods: {
      navItemClass (item) {
        return item === this.active ? 'nav-item is-tab is-active' : 'nav-item is-tab'
      }
    },
    mounted () {
      let keys = Object.keys(this.pages)
      if (keys.length) {
        this.active = keys[0]
      }
    },
    components: {
      RenderPage
    }
  }
</script>
