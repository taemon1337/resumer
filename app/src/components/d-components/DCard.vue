<template>
  <div class='card'>
    <header v-if="header" class='card-header'>
      <p v-if="header.title" class="card-header-title">{{ header.title }}</p>
      <a v-if="header.icon" class='card-header-icon' :href="header.href || '#'" target='_blank'>
        <span class="icon"><i :class='header.icon'></i></span>
      </a>
    </header>
    <div v-if="image" class="card-image">
      <figure :class="image.class || 'image'">
        <img :src="image.src" :alt="image.alt">
      </figure>
    </div>
    <div v-if="content" class="card-content">
      <div v-if="media" class="media">
        <div class="media-left">
          <figure :class="media.class || 'image'">
            <img :src="media.src" :alt="media.alt">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ media.title }}</p>
          <p class="subtitle is-6">{{ media.subtitle }}</p>
        </div>
      </div>
  
      <div class="content" v-html="content"></div>
    </div>
    <footer v-if="footer" class="card-footer">
      <a v-for="(foot, index) in footer" key='index' class='card-footer-item' target='_blank' :href="foot.href || '#'">{{ foot.text }}</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'DCard',
    props: {
      content: {
        required: true,
        type: String
      },
      header: {
        type: Object
      },
      footer: {
        type: Array
      },
      image: {
        type: Object
      },
      media: {
        type: Object
      }
    },
    data () {
      return {}
    }
  }
</script>
