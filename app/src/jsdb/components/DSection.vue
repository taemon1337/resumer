<template>
  <section :class='klass'>
    <h1 v-if='title' class='title'>{{ title }}</h1>
    <h3 v-if='subtitle' class='subtitle'>{{ title }}</h3>
    <slot></slot>
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
        default: 'section'
      }
    },
    data () {
      return {}
    }
  }
</script>
