<template>
  <div class='container'>
    <d-render v-bind='computedLayout'></d-render>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import inject from '@/lib/inject'

  export default {
    name: 'DLayout',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        layout: 'layout',
        database: 'database'
      }),
      computedLayout () {
        return inject.inject(this.layout, this.database, this.layout.templates)
      }
    }
  }
</script>
