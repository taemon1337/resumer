<template>
  <div>
    <nav class='level'>
    <p v-for='(page, key) in pages' key='key' class="level-item has-text-centered">
      <a @click='active=key' class="link is-info">{{ page.title || key | capitalize }}</a>
    </p>
  </nav>
    <section class='section' v-if='active'>
      <render-page :name='active' :page='pages[active]'></render-page>
    </section>
    <section class='section' v-else>
      Click a page to open it.
    </section>
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
    components: {
      RenderPage
    }
  }
</script>
