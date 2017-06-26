<template>
  <nav class='level'>
    <div v-for='(item, index) in items' key='index' class='level-item has-text-centered'>
      <d-render v-bind='item'></d-render>
    </div>
  </nav>
</template>

<script>
  import DRender from './DRender'

  export default {
    name: 'DLevel',
    props: {
      items: {
        required: true,
        type: Array
      }
    },
    data () {
      return {}
    },
    components: {
      DRender
    }
  }
</script>
