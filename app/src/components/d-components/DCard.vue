<template>
  <div class='card'>
    <h1>Card</h1>
  </div>
</template>

<script>
  export default {
    name: 'DCard',
    props: {
      items: {
        required: true,
        type: Array
      }
    },
    data () {
      return {}
    }
  }
</script>
