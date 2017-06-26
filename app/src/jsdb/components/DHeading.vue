<template>
  <div>
    <p v-if='heading' class='heading'>{{ heading }}</p>
    <p v-if='content' :class='klass' v-html='content'></p>
  </div>
</template>

<script>
  export default {
    name: 'DHeading',
    props: {
      heading: {
        type: String
      },
      content: {
        type: String
      },
      klass: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    }
  }
</script>
