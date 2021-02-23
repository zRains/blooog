<!-- abyss-Home -->
<template>
  <div class="Home">
    <section>
      <div v-html="letterSlicer('不跑了 我累了')" class="sketch-amine"></div>
    </section>
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
  display grid
  place-items center
  section
    width 100%
    background $abyss_bgColor
    padding 20px
    clip-path polygon(40px 0,100% 0,100% calc(100% - 40px), calc(100% - 40px) 100%,0 100%,0 40px)
    div:first-child
      font-size 1.5rem
      font-weight bold
      letter-spacing 8px
      text-align center
      color $abyss_textColor
      i
        animation-duration .45s
</style>
