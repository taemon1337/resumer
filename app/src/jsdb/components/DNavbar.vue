<template>
  <nav class='nav'>
    <div v-if="left" class="nav-left">
      <d-navbar-item v-for='(item, index) in left' key='index' v-bind="item"></d-navbar-item>
      <slot name="left" scope="left"></slot>
    </div>
    <div v-if="center" class="nav-center">
      <d-navbar-item v-for='(item, index) in center' key='index' v-bind="item"></d-navbar-item>
      <slot name="left" scope="center"></slot>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div v-if="right" class="nav-right nav-menu">
      <d-navbar-item v-for='(item, index) in right' key='index' v-bind="item"></d-navbar-item>
      <slot name="left" scope="right"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'DNavbar',
    props: {
      left: {
        type: Array
      },
      center: {
        type: Array
      },
      right: {
        type: Array
      }
    },
    data () {
      return {}
    }
  }
</script>
