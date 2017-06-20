<template>
  <div>
    <div v-for='(message, idx) in messages' :key='idx' :class="message.class || 'notification'">
      <button @click='remove(idx)' class="delete"></button>
      {{ message.title }}
      <small v-if='message.content'>{{ message.content }}</small>
    </div>
  </div>
</template>

<script>
  import { MessageTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'

  export default {
    name: 'ErrorMessage',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        messages: MessageTypes.all
      })
    },
    methods: {
      remove (idx) {
        this.$store.dispatch(MessageTypes.remove, idx)
      }
    }
  }
</script>
