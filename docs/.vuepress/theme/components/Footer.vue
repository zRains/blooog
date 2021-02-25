<!-- abyss-Footer -->
<template>
  <footer class="Footer">
    <section class="copyright">
      Copyright © 2021-202x zRain
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="stylus">
.Footer
  height 100px
  background $abyss_whiteColor
  .copyright
    display flex
    text-rendering optimizeLegibility
    box-sizing border-box
    justify-content center
    padding 20px
    height 100%
    font-size .88rem
    color $abyss_textColor
    letter-spacing .5px
</style>
