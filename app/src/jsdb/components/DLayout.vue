<template>
  <div class='layout'>
    <d-render v-bind='computedLayout'></d-render>
    COMPUTED LAYOUT: {{ computedLayout }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  let lookup = function (key, db) {
    console.log('lookup', key, db)
    let keychain = key.split('.')
    let result = null

    keychain.forEach(function (subkey) {
      result = db[subkey]
    })

    if (typeof result === 'string' && result.startsWith('vuex:')) {
      return lookup(result, db)
    } else {
      return result
    }
  }

  let inject = function (obj, db) {
    let isarray = typeof obj.forEach === 'function'
    let injected = isarray ? [] : {}

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val = obj[key]
        if (typeof val !== 'object') {
          if (val.startsWith('vuex:')) {
            val = lookup(val.replace('vuex:', ''), db)
          }
        } else {
          val = inject(val, db)
        }
        if (isarray) {
          injected.push(val)
        } else {
          injected[key] = val
        }
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
