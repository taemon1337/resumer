<template>
  <div class='columns is-multiline'>
    <div class='column is-12'>
      <div :class="klass">
        <ul>
          <li v-for='(tab, index) in tabs' key='index' :class='isActive(index)'>
            <a @click.stop.prevent='activate(index)' :href="'#' + tabId(tab, index)">{{ tab.label || tab.id | capitalize }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class='column is-12' v-for='(tab, index) in tabs' key='index' :id="tabId(tab, index)" v-if='isActive(index)'>
      <slot :name='tabId(tab, index)' props='tab'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DTabs',
    props: {
      tabs: {
        type: Array,
        required: true
      },
      klass: {
        type: String,
        default: 'tabs column is-12'
      }
    },
    data () {
      return {
        activeIndex: 0
      }
    },
    computed: {
      currentTab () {
        return this.tabs[this.activeIndex]
      }
    },
    methods: {
      isActive (index) {
        return this.activeIndex === index ? 'is-active' : ''
      },
      tabId (tab, index) {
        return (tab.id || 'tab-' + index)
      },
      activate (index) {
        this.activeIndex = index
      }
    }
  }
</script>
