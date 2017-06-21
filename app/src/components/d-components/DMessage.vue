<template>
  <article class='message'>
    <div v-if='header' class='message-header'>
      <p v-html='header'></p>
    </div>
    <div class='message-body' v-html='content'></div>
  </article>
</template>

<script>
  export default {
    name: 'DMessage',
    props: {
      header: {
        type: String
      },
      content: {
        required: true,
        type: String
      }
    },
    data () {
      return {}
    }
  }
</script>
