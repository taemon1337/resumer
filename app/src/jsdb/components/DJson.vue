<template>
  <pre>{{ json }}</pre>
</template>

<script>
  export default {
    name: 'DJson',
    props: {
      json: {
        type: Object,
        required: true
      }
    },
    data () {
      return {}
    }
  }
</script>
