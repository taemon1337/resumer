<template>
  <div :class='klass'>
    <span v-if="visible">
      <div v-for='(child, index) in children' key='index' :class='childClass'>
        <d-render v-bind='child'></d-render>
      </div>
    </span>
    <span v-else>
      <div class='hero has-text-centered' style='width:50%;margin-left:25%;'>
        <p class='subtitle' v-html='banner'></p>
        <button @click='visible=true' class='button is-large'>{{ text }}</button>
      </div>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'DClickTo',
    props: {
      children: {
        required: true,
        type: Array
      },
      childClass: {
        type: String,
        default: ''
      },
      klass: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: 'Enter'
      },
      banner: {
        type: String,
        default: 'You must click to view this content.'
      }
    },
    data () {
      return { visible: false }
    }
  }
</script>
