<template>
  <div class='container'>
    <div id="app">
      <navbar></navbar>
      <error-messages></error-messages>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import 'bulma'
  import Navbar from '@/components/Navbar'
  import ErrorMessages from '@/components/ErrorMessages'
  import { DataTypes } from '@/store/mutation-types'

  export default {
    name: 'app',
    created () {
      this.$store.dispatch(DataTypes.init)
    },
    components: {
      Navbar,
      ErrorMessages
    }
  }
</script>

<style lang="sass">
  // 1. Import the initial variables
  @import "node_modules/bulma/sass/utilities/initial-variables"
  
  // 2. Set your own initial variables
  // Update blue
  $blue: #72d0eb
  // Add pink and its invert
  $pink: #ffb3b3
  $pink-invert: #fff
  // Add a serif family
  $family-serif: "Merriweather", "Georgia", serif
  
  // 3. Set the derived variables
  // Use the new pink as the primary color
  $primary: $pink
  $primary-invert: $pink-invert
  // Use the existing orange as the danger color
  $danger: $orange
  // Use the new serif family
  $family-primary: $family-serif
  
  // 4. Import the rest of Bulma
  @import "node_modules/bulma/bulma"
</style>

<style>
  .is-round {
    border-radius: 50%;
  }
  .has-shadow {
    box-shadow:0 2px 3px rgba(10, 10, 10, 0.1);
  }
  .is-bold {
    font-weight: bold;
  }
  .is-italic {
    font-style: italic;
  }
  .size-8 {
    font-size:8px;
  }
  .size-10 {
    font-size:10px;
  }
  .size-12 {
    font-size:12px;
  }
  .size-14 {
    font-size:14px;
  }
  .size-16 {
    font-size:16px;
  }
  .size-18 {
    font-size:18px;
  }
  .size-20 {
    font-size:20px;
  }
  .nav-item img {
    max-height: 3.1rem;
  }
</style>
