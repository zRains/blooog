<!-- abyss-NavLinks -->
<template>
  <div id="NavLinks" v-if="userConfigLinks.length">
    <div class="nav-item" v-for="(item, index) in userConfigLinks" :key="index">
      <NavLink v-if="item.type === 'link'" :item="item" />
      <NavDropdownLink v-if="item.type === 'links'" :item="item" />
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import NavDropdownLink from '@theme/components/NavDropdownLink.vue'
import { defineTypeLinks } from '../util'
export default {
  components: {
    NavLink,
    NavDropdownLink,
  },
  computed: {
    userConfigLinks() {
      return defineTypeLinks(this.$site.themeConfig.nav || [])
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="stylus">
#NavLinks
  height 100%
  display flex
  align-items center
  flex-wrap nowrap
  .nav-item
    display flex
    align-items center
    height 100%
    margin-left 1.5rem
    a,.NavDropdownLink span:first-child
      font-size .9rem
      white-space nowrap
      font-weight bold
    .dropdown a
      font-weight normal
</style>
