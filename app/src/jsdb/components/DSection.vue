<template>
  <section :class='klass'>
    <h1 v-if='title' class='title'>{{ title }}</h1>
    <h3 v-if='subtitle' class='subtitle'>{{ subtitle }}</h3>
    <slot name='section'></slot>
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
      }
    },
    data () {
      return {}
    }
  }
</script>
