<template>
  <article class="media">
    <figure v-if="left" class="media-left">
      <p v-if"left.image" :class="left.image.klass || 'image is-64x64'">
        <img :src="left.image.src" :alt="left.image.alt">
      </p>
      <slot name='left' scope='left'></slot>
    </figure>
    <div class="media-content">
      <slot name='content' scope='content'></slot>
      <d-media v-if='children' v-for='(child, index) in children' key='index' v-bind='child'></d-media>
    </div>
    <figure v-if="right" class="media-right">
      <p v-if"right.image" :class="right.image.klass || 'image is-64x64'">
        <img :src="right.image.src" :alt="right.image.alt">
      </p>
      <slot name='right' scope='right'></slot>
    </figure>
  </article>
</template>

<script>
  export default {
    name: 'DMedia',
    props: {
      left: {
        type: Object
      },
      content: {
        type: Object
      },
      right: {
        type: Object
      },
      children: {
        type: Array,
        default () { return [] }
      }
    },
    data () {
      return {}
    }
  }
</script>
