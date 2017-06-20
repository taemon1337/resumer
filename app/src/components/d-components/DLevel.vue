<template>
  <nav class='level is-mobile'>
    <div v-for='(item, index) in items' key='index' class='level-item has-text-centered'>
      <div>
        <p class="heading">{{ item.heading }}</p>
        <p class="title">{{ item.content }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'DLevel',
    props: {
      items: {
        required: true,
        type: Array
      }
    },
    data () {
      return {}
    }
  }
</script>
