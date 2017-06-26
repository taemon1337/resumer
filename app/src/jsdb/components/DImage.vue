<template>
  <figure :class='klass'>
    <img :class='image.klass' :src='image.src' :alt='image.alt'>
  </figure>
</template>

<script>
  export default {
    name: 'DImage',
    props: {
      image: {
        type: Object,
        required: true
      },
      klass: {
        type: String,
        default: 'image'
      }
    },
    data () {
      return {}
    }
  }
</script>
