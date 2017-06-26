<template>
  <section :class='klass'>
    <div class='hero-body'>
      <div class='container'>
        <h1 v-if='title' class='title'>{{ title }}</h1>
        <h2 v-if='subtitle' class='subtitle'>{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DHero',
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      klass: {
        type: String,
        default: 'hero'
      }
    },
    data () {
      return {}
    }
  }
</script>
