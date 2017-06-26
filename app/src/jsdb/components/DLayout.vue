<template>
  <div class='container'>
    <d-render v-bind='computedLayout'></d-render>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  let lookup = function (val, db) {
    if (!val) {
      return val
    } else if (typeof val === 'string') {
      if (val.startsWith('vuex:')) {
        return lookup(val.replace('vuex:', '').split('.').reduce((o, i) => o[i], db), db) // https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
      } else {
        return val
      }
    } else if (typeof val.forEach === 'function') {
      return val.map(function (item) { return lookup(item, db) })
    } else if (typeof val === 'object') {
      return inject(val, db)
    } else {
      console.warn('Invalid Type for Lookup Value: only string, object, array, and falsy supported. type=', typeof val, val)
    }
  }

  // not using vuex the right way, just inject data from the 'database' into the layout object
  let inject = function (obj, db) {
    let isarray = typeof obj.forEach === 'function'
    let injected = isarray ? [] : {}

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        injected[key] = lookup(obj[key], db)
      }
    }

    return injected
  }

  export default {
    name: 'DLayout',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        layout: 'layout',
        database: 'database'
      }),
      computedLayout () {
        return inject(this.layout, this.database)
      }
    }
  }
</script>
