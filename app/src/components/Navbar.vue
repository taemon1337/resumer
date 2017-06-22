<template>
  <nav class="nav" v-if='decrypted'>
    <div class="nav-left">
      <a class="nav-item" v-if="navbar.image">
        <img :class='navbar.image.class' :src='navbar.image.src' :alt='navbar.title'>
      </a>
      <a class="nav-item" v-if="navbar.title">
        {{ navbar.title }}
      </a>
    </div>
  
    <div class="nav-center">
      <a class="nav-item" :href='github.profile' :title='computedGithubTitle' target='_blank'>
        <span class="icon">
          <i class="fa fa-github has-text-info"></i>
        </span>
      </a>
      <a class="nav-item" :href='twitter.profile' :title='computedTwitterTitle' target='_blank'>
        <span class="icon has-text-info">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div>
  
    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
  
    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item">
        Home
      </a>
      <a class="nav-item">
        Documentation
      </a>
      <a class="nav-item">
        Blog
      </a>
  
      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" >
              <span class="icon has-text-info">
                <i class="fa fa-twitter"></i>
              </span>
              <span>Tweet</span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
      
      <a v-if='decrypted' @click='relock' class="nav-item is-tab" title='Re-Lock the site data'>
        <span>Logout</span>
        <span class='icon'>
          <i class='fa fa-lock'></i>
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
  import { DataTypes } from '@/store/mutation-types'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Navbar',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        user: DataTypes.user,
        navbar: DataTypes.navbar,
        github: DataTypes.github,
        twitter: DataTypes.twitter,
        decrypted: DataTypes.decrypted
      }),
      computedGithubTitle () {
        return this.user.first + '"s Github profile'
      },
      computedTwitterTitle () {
        return this.user.first + '"s Twitter profile'
      }
    },
    methods: {
      relock () {
        this.$store.dispatch(DataTypes.lock)
      }
    }
  }
</script>
