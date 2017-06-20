<template>
  <div>
    <div v-if='!decrypted' class="tile">
      <div v-for='(site, index) in sites' key='index' class="tile is-parent is-vertical">
        <article class="tile is-child notification is-warning">
          <p class="title">
            <span>{{ site.meta.name }} is currently locked</span>
            <span class='icon is-large'><i class='fa fa-lock'></i></span>
          </p>
          <p class="subtitle">
            {{ site.meta.description }}
          </p>
          <form @submit.prevent.stop='submit'>
            <input type='hidden' name='idx' :value='index' />
            
            <div v-if="site.secure" class="field">
              <p class="control">
                <input class="input" type="text" placeholder="Enter token...">
              </p>
            </div>

            <button type='submit' class="button" @click='inputToken=true'>Unlock and Load</button>
          </form>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  import { DataTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        sites: DataTypes.all,
        decrypted: DataTypes.decrypted
      })
    },
    methods: {
      submit (e) {
        let index = parseInt(e.target.elements[0].value)
        let pwd = e.target.elements[1].value
        this.$store.dispatch(DataTypes.load, { index: index, password: pwd })
        e.target.reset()
      }
    }
  }
</script>
