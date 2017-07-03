<template>
  <section :class='klass'>
    <h1 v-if='title' class='title'>{{ title }}</h1>
    <h3 v-if='subtitle' class='subtitle'>{{ subtitle }}</h3>
    <p v-if='content' v-html='content'></p>
    <slot name='section'></slot>
    <div v-for='(child, index) in children' key='index' :class='childClass'>
      <d-render v-bind='child'></d-render>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DSection',
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      klass: {
        type: String,
        default: 'content'
      },
      content: {
        type: String
      },
      children: {
        type: Array,
        default () { return [] }
      },
      childClass: {
        type: String,
        default: 'm1'
      }
    },
    data () {
      return {}
    }
  }
</script>
