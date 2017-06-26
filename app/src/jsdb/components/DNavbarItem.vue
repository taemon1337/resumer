<template>
  <a :class="klass" :href='href'>
    <img v-if="image" :src='image.src' :alt="image.alt">
    <span v-if="text">{{ text }}</span>
    <span v-if="icon" class="icon"><i class="fa fa-github"></i></span>
  </a>
</template>

<script>
  export default {
    name: 'DNavbarItem',
    props: {
      href: {
        type: String,
        default: '#'
      },
      text: {
        type: String
      },
      icon: {
        type: String
      },
      image: {
        type: Object
      },
      klass: {
        type: String,
        default: 'nav-item'
      }
    },
    data () {
      return {}
    }
  }
</script>
