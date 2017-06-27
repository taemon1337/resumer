<template>
  <article class="media">
    <figure v-if='left' class='media-left'>
      <a v-if="left.image" :class="left.klass || 'image is-64x64'" target='_blank' :href="computedHref">
        <img :src='left.image.src' :alt='left.image.alt'>
      </a>
      <slot name='left' scope='left'></slot>
    </figure>
    <div class="media-content">
      <a v-if='subtitle' :href='subtitle.href' target='_blank' class='link subtitle'>{{ subtitle.text }}</a>
      <div v-if="typeof content === 'string'" v-html='content'></div>
      <!--<slot v-if='typeof content === "object" ' name='content' scope='content'></slot>-->
      <d-media v-if='children' v-for='(child, index) in children' key='index' v-bind='child'></d-media>
    </div>
    <figure class="media-right">
      <span v-if='tag' class="tag is-warning">{{ tag }}</span>
      <a v-if="right && right.image" :class="right.klass || 'image is-64x64'" target='_blank' :href="computedHref">
        <img :src='right.image.src' :alt='right.image.alt'>
      </a>
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
      subtitle: {
        type: Object
      },
      content: {
        type: [Object, String]
      },
      right: {
        type: Object
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
