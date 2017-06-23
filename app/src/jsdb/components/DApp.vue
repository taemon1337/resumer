<template>
  <div class='container'>
    <h1>D-APP:</h1>
    <div id='jsdb'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DApp',
    data () {
      return {}
    },
    beforeCreate () {
      console.log('creating d-app...')
    }
  }
</script>
