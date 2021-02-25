<!-- abyss-Home -->
<template>
  <div class="Home">
    <section>打五把CSGO</section>
  </div>
</template>
<script>
import { letterSlicer } from '../util'
export default {
  data() {
    return {}
  },
  methods: {
    letterSlicer,
  },
}
</script>
<style lang="stylus">
.Home
  min-height 'calc(100vh - %s)' % $navbarHeight
  display flex
  justify-content center
  align-items center
  background url("/img/HomeBg.svg") center center / cover no-repeat
  section
    font-size 2.5rem
    font-weight bold
    letter-spacing 2px
</style>
