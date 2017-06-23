<template>
  <div :class="klass">
    <h1>RENDER {{ component }}</h1>
    <component :is='component' v-bind="properties">
      <div v-for="(config, name) in slots" key='name'>
        <template :slot='name' scope='config'>
          <d-render v-bind="config"></d-render>
        </template>
      </div>
    </component>
    <div v-if="children.length">
      <div v-for="(child, index) in children" key='index'>
        <d-render v-bind="child"></d-render>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'DRender',
    props: {
      component: {
        required: true,
        type: String
      },
      properties: {
        required: true,
        type: Object
      },
      klass: {
        type: String
      },
      children: {
        type: Array,
        default () { return [] }
      },
      slots: {
        type: Object,
        default () { return {} }
      }
    },
    data () {
      return {}
    },
    computed: {
      
    }
  }
</script>
