<template>
  <a v-if='vif' :class="klass" :href='href'>
    <img :class="image.klass || ''" v-if="image" :src='image.src' :alt="image.alt">
    <span v-if="text">{{ text }}</span>
    <span v-if="icon" class="icon has-text-info"><i :class="icon"></i></span>
    <span v-if='content' v-html='content'></span>
  </a>
</template>

<script>
  export default {
    name: 'DNavbarItem',
    props: {
      vif: {
        type: String,
        default: '1'
      },
      href: {
        type: String,
        default: '#'
      },
      text: {
        type: String
      },
      content: {
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
