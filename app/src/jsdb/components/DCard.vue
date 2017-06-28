<template>
  <div :class='klass'>
    <div v-if='image' class="card-image">
      <a :href="image.href || '#'" :class="image.klass || 'image is-square'" style='height:350px;'>
        <img :src='image.src' :alt='image.src' :style='image.style'>
      </a>
    </div>
    <div class='card-content'>
      <p v-if='title' class='title'>{{ title }}</p>
      <div v-if='content' class='content' v-html='content'></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DCard',
    props: {
      klass: {
        type: String,
        default: 'card'
      },
      image: {
        type: Object
      },
      title: {
        type: String
      },
      content: {
        type: String
      }
    },
    data () {
      return {}
    }
  }
</script>
