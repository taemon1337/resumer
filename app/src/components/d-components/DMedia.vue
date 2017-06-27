<template>
  <article class='media'>
    <figure v-if='left' class='media-left'>
      <a :class="left.klass || 'image'" target='_blank' :href="computedHref">
        <img :src='left.src'>
      </a>
    </figure>
    <div class='media-content'>
      <a v-if='subtitle' :href='subtitle.href' target='_blank' class='link subtitle'>{{ subtitle.text }}</a>
      <div class='content' v-html='content'></div>
      <d-media v-if='children.length' v-for='(child, index) in children' key='index' v-bind='child'></d-media>
    </div>
    <div class='media-right'>
      <span v-if='tag' class="tag is-warning">{{ tag }}</span>
      <a v-if='button' :class="button.klass || 'button is-small'" :href='button.href' title='Show in job history'>
        <span v-if='button.text'>{{ button.text }}</span>
        <span v-if='button.icon' class='icon'><i :class='button.icon'></i></span>
      </a>
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
      },
      tag: {
        type: String
      },
      button: {
        type: Object
      }
    },
    data () {
      return {}
    },
    computed: {
      computedHref () {
        return this.subtitle && this.subtitle.href ? this.subtitle.href : '#'
      }
    }
  }
</script>
