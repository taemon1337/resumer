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

  export default {
    name: 'app',
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
