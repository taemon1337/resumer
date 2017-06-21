<template>
  <div class='columns has-shadow'>
    <div class='column' v-for='(section, index) in page.sections' key='index'>
      <component v-if='section.component' :is="section.component" v-bind="section.props">
        <template v-if="section.slot" scope='props'>
          <component :is='section.slot.component' v-bind="mergeProps(section.slot.props, props)"></component>
        </template>
      </component>
    </div>
  </div>
</template>

<script>
  import DLevel from 'd/DLevel'
  import DCard from 'd/DCard'
  import DMessage from 'd/DMessage'
  import DTiles from 'd/DTiles'
  import DTile from 'd/DTile'
  import DMedia from 'd/DMedia'

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
    methods: {
      mergeProps (a, b) {
        return Object.assign({}, a, b)
      }
    },
    beforeCreate: function () {
      this.$options.components.RenderPages = require('@/components/RenderPages') // fix circular component reference
    },
    components: {
      DLevel,
      DCard,
      DMessage,
      DTiles,
      DTile,
      DMedia
    }
  }
</script>
