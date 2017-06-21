<template>
  <div class='tile is-ancestor'>
    <div v-for='(item, index) in items' :class='randTile' key='index' style='min-width:300px;padding:7px;'>
      <slot v-bind='item'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DTiles',
    props: {
      items: {
        required: true,
        type: Array
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
      randTile () {
        return this.tiles[Math.floor(Math.random() * this.tiles.length)]
      }
    }
  }
</script>
