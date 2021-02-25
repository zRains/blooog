<!-- abyss-Navbar -->
<template>
  <div class="Navbar">
    <RouterLink :to="$localePath" class="home-link">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span v-if="$siteTitle">{{ $siteTitle }}</span>
    </RouterLink>
    <div class="util"></div>
    <Viewer />
    <NavLinks />
  </div>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'
import Viewer from '@theme/components/Viewer.vue'
export default {
  components: {
    NavLinks,
    Viewer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
$conent-height = $navbarHeight - $navbar-vertical-padding * 2
.Navbar
  position fixed
  display flex
  top 0
  left 0
  right 0
  height: $navbarHeight
  box-shadow 0 1px 2px 0 rgba(0,0,0,0.1)
  align-items center
  box-sizing border-box
  padding $navbar-vertical-padding $navbar-horizontal-padding
  background $abyss_whiteColor
  z-index 2
  transition background .2s
  .util
    flex-grow 1
  .home-link
    display inline-flex
    align-items center
    .logo
      height $conent-height
      margin-right .8rem
    span
      display inline-block
      font-weight bold
      font-size 1.2rem
</style>
