<template>
  <div :class='computedClass'>
    <p v-if='title' class='title'>{{ title }}</p>
    <p v-if='subtitle' class='subtitle'>{{ subtitle }}</p>
    <div v-if='content' v-html='content'></div>

    <div class=''>
      <template v-if='children.length'>
        <d-tile v-for='(child, index) in children' key='index' v-bind='child' style='margin:7px;'></d-tile>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DTile',
    props: {
      klass: {
        type: String,
        default: 'tile is-ancestor'
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      content: {
        type: String
      },
      children: {
        type: Array,
        default () { return [] }
      },
      random: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        colors: ['is-primary', 'is-info', 'is-warning', 'is-danger', 'is-success'],
        sizes: ['is-3', 'is-4', 'is-5', 'is-6']
      }
    },
    methods: {
      randomColor () {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
      },
      randomSize () {
        return this.sizes[Math.floor(Math.random() * this.sizes.length)]
      }
    },
    computed: {
      computedClass () {
        let color = this.random ? ' notification ' + this.randomColor() + ' ' + this.randomSize() : ''
        return this.klass + color
      }
    }
  }
</script>
