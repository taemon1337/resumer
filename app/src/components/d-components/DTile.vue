<template>
  <article :class='computedClass'>
    <p v-if='title' class='title'>{{ title }}</p>
    <p v-if='subtitle' class='subtitle'>{{ subtitle }}</p>
    <p v-html='content'></p>
  </article>
</template>

<script>
  export default {
    name: 'DTile',
    props: {
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      content: {
        required: true,
        type: String
      },
      tile: {
        type: String,
        default: 'tile is-child notification'
      },
      colors: {
        type: Array,
        default () {
          return ['is-success', 'is-warning', 'is-danger', 'is-info', 'is-primary']
        }
      },
      tiles: {
        type: Array,
        default () {
          return ['is-child', 'is-vertical', 'is-parent']
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      randColor () {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
      },
      randTile () {
        return this.tiles[Math.floor(Math.random() * this.tiles.length)]
      }
    },
    computed: {
      computedClass () {
        return [this.tile, this.randColor(), this.randTile()].join(' ')
      }
    }
  }
</script>
