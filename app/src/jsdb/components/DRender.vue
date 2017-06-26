<template>
  <div :class="klass">
    <component :is='component' v-bind="properties">
      <div v-if='slots' v-for="(prop, name) in slots" key='name' :slot='name' scope='props'>
        <d-render v-bind='prop'></d-render>
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
        type: Object
      }
    },
    data () {
      return {}
    }
  }
</script>
