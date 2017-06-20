<template>
  <div class='container' style='border:1px solid blue'>
    <div class='level' v-for='(section, index) in page.sections' key='index'>
      <div class='level-left'></div>
      <div v-if="section.component" class='level-item'>
        <component :is="section.component" v-bind="section.props"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import DLevel from 'd/DLevel'

  export default {
    name: 'RenderPage',
    props: {
      name: {
        required: true,
        type: String
      },
      page: {
        required: true,
        type: Object
      }
    },
    data () {
      return {}
    },
    components: {
      DLevel
    }
  }
</script>
