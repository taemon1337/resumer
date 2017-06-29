<template>
  <div class='container'>
    <d-render v-bind='layout'></d-render>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'DLayout',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        layout: 'layout',
        database: 'database'
      })
    }
  }
</script>
