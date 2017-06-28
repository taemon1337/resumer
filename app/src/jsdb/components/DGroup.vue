<template>
  <div :class='klass' style='margin:7px 0px;'>
    <div v-for='(child, index) in children' key='index' :class='childClass'>
      <d-render v-bind='child'></d-render>
    </div>
  </div>
</template>

<script>
  import DRender from '@/jsdb/components/DRender'

  export default {
    name: 'DGroup',
    props: {
      children: {
        required: true,
        type: Array
      },
      klass: {
        type: String,
        default: ''
      },
      childClass: {
        type: String,
        default: ''
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
