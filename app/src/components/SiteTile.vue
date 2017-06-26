<template>
  <article class="tile is-child notification is-warning">
    <p class="title">
      <span>{{ site.meta.name }} is currently locked</span>
      <span class='icon is-large'><i class='fa fa-lock'></i></span>
    </p>
    <p class="subtitle">
      {{ site.meta.description }}
    </p>
    <form @submit.prevent.stop='submit'>
      <input type='hidden' name='name' :value='name' />
      
      <div v-if="site.secure" class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter token...">
        </p>
      </div>

      <button type='submit' class="button" @click='inputToken=true'>Unlock and Load</button>
    </form>
  </article>
</template>

<script>
  export default {
    name: 'SiteTile',
    props: {
      name: {
        require: true,
        type: String
      },
      site: {
        required: true,
        type: Object
      }
    },
    data () {
      return {}
    },
    methods: {
      submit (e) {
        this.$emit('activate', e)
      }
    }
  }
</script>
