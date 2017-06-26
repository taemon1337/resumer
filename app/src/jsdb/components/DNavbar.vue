<template>
  <nav class='nav'>
    <div v-if="left" class="nav-left">
      <d-navbar-item v-bind="left"></d-navbar-item>
      <slot name="left" scope="left"></slot>
    </div>
    <div v-if="center" class="nav-center">
      <d-navbar-item v-bind="center"></d-navbar-item>
      <slot name="left" scope="center"></slot>
    </div>
    <div v-if="right" class="nav-right">
      <d-navbar-item v-bind="right"></d-navbar-item>
      <slot name="left" scope="right"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'DNavbar',
    props: {
      left: {
        type: Object
      },
      center: {
        type: Object
      },
      right: {
        type: Object
      }
    },
    data () {
      return {}
    }
  }
</script>
