<template>
  <article :class="klass">
    <figure v-if='left' class='media-left'>
      <a v-if="left.image" :class="left.klass || 'image is-64x64'" target='_blank' :href="computedHref">
        <img :src='left.image.src' :alt='left.image.alt'>
      </a>
      <slot name='left' scope='left'></slot>
    </figure>
    <div class="media-content">
      <a v-if='subtitle' :href='subtitle.href' target='_blank' :class='subtitleClass'>
        {{ subtitle.text }}
      </a>
      <div v-if="isString">
        <div v-html='content'></div>
      </div>
      <div v-else>
        <slot name='content' scope='content'></slot>
      </div>
      <d-media v-if='children' v-for='(child, index) in children' key='index' v-bind='child'></d-media>
    </div>
    <figure class="media-right">
      <span v-if="tag !== ' '" class="tag is-warning" style='margin-right:15px;'>{{ tag }}</span>
      <div v-if='right'>
        <a v-if="right && right.image" :class="right.klass || 'image is-64x64'" target='_blank' :href="computedHref">
          <img :src='right.image.src' :alt='right.image.alt'>
        </a>
        <slot name='right' scope='right'></slot>
      </div>
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
        type: String
      },
      right: {
        type: Object
      },
      children: {
        type: Array,
        default () { return [] }
      },
      tag: {
        type: String,
        default: ' '
      },
      button: {
        type: Object
      },
      klass: {
        type: String,
        default: 'media'
      }
    },
    data () {
      return {}
    },
    computed: {
      computedHref () {
        return this.subtitle && this.subtitle.href ? this.subtitle.href : '#'
      },
      isString () {
        return typeof this.content === 'string'
      },
      subtitleClass () {
        return this.subtitle && this.subtitle.klass ? this.subtitle.klass : 'link subtitle'
      }
    }
  }
</script>
