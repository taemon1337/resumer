<template>
  <article :class="computedClass">
    <div v-if='site.secure'>
      <div class='is-pulled-right'>
        <span class='icon is-large has-text-danger' title='is locked and required a valid access token'><i class='fa fa-lock'></i></span>
      </div>
    </div>
    <div v-else>
      <div class='is-pulled-right'>
        <span class='icon is-large has-text-primary' title='is unlocked and accessible'><i class='fa fa-unlock'></i></span>
      </div>
    </div>
    <p class="title">{{ name }}</p>
    <form @submit.prevent.stop='submit'>
      <input type='hidden' name='index' :value='index' />
      
      <div v-if="site.secure" class="field">
        <p class="control">
          <input class="input" type="text" placeholder="Enter access token...">
        </p>
      </div>

      <div v-if="site.secure" class='has-text-centered'>
        <button type='submit' class="button is-large" @click='inputToken=true'>Unlock</button>
      </div>
      <div v-else class='has-text-centered'>
        <button type='submit' class="button is-large" @click='inputToken=true'>Enter</button>
      </div>
    </form>
    <p class="subtitle">
      {{ site.meta.subtitle }}
    </p>
  </article>
</template>

<script>
  export default {
    name: 'SiteTile',
    props: {
      index: {
        type: [Number, String],
        required: true
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
    },
    computed: {
      computedClass () {
        return this.site.meta.klass || 'tile is-child box'
      },
      name () {
        return this.site.meta.title || this.site.meta.name || this.index
      }
    }
  }
</script>
