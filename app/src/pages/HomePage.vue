<template>
  <div>
    <div class="columns">
      <div class='column is-one-quarter'>
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
      <div class='column is-three-quarters'>
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
        <div v-else>
          <render-pages :pages='pages || []'></render-pages>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RenderPages from '@/components/RenderPages'
  import { DataTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        sites: DataTypes.all,
        pages: DataTypes.pages,
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
    },
    components: {
      RenderPages
    }
  }
</script>
