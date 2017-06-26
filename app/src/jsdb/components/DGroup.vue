<template>
  <div :class='klass' style='margin:7px 0px;'>
    <section v-for='(child, index) in children' key='index'>
      <d-render v-bind='child'></d-render>
    </section>
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
