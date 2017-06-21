<template>
  <article class='media'>
    <figure v-if='left' class='media-left'>
      <p :class="left.class || 'image'">
        <img :src='left.src'>
      </p>
    </figure>
    <div class='media-content'>
      <a v-if='subtitle' :href='subtitle.href' target='_blank' class='subtitle'>{{ subtitle.text }}</a>
      <div class='content' v-html='content'></div>
      <d-media v-if='children.length' v-for='(child, index) in children' key='index' v-bind='child'></d-media>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'DMedia',
    props: {
      left: {
        type: Object
      },
      subtitle: {
        type: Object
      },
      content: {
        required: true,
        type: String
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
