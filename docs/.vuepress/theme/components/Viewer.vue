<!-- Viewer -->
<template>
  <div id="Viewer">
    <label ref="Viewer" @click="changeViewMode">
      <span>🌜</span>
      <span>🌞</span>
      <input type="checkbox" />
      <span class="toggle"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let Viewer = this.$refs.Viewer.querySelector("input[type='checkbox']")
    this.$nextTick(() => {
      if (this.$site.themeConfig.theme === 'light') {
        Viewer.checked = false
      } else Viewer.checked = true
    })
  },
  methods: {
    changeViewMode: function() {
      if (this.$refs.Viewer.querySelector("input[type='checkbox']").checked) {
        window.document.documentElement.setAttribute('data-theme', 'dark')
        window.localStorage.setItem('themedata', 'dark')
      } else {
        window.document.documentElement.setAttribute('data-theme', 'light')
        window.localStorage.setItem('themedata', 'light')
      }
      this.$site.themeConfig.theme = window.document.documentElement.getAttribute(
        'data-theme'
      )
    },
  },
}
</script>
<style lang="stylus">
#Viewer
  height 100%
  display inline-flex
  align-items center
  user-select none
  label
    position: relative;
    height 25px
    width 50px
    background #4d4d4d
    margin-left auto
    cursor pointer
    border-radius 20px
    z-index 1
    span:not(.toggle)
      position absolute
      display inline-block
      text-align center
      font-size 0.95rem
      line-height 25px
      height 25px
      width 25px
      &:nth-child(1)
        left 0
        top 0
      &:nth-child(2)
        right  0
        top 0
    .toggle
      position absolute
      height 25px
      width 25px
      background #fff
      transform scale(.8)
      border-radius 50%
      transition .2s
    input[type='checkbox']:checked + .toggle
      transform translateX(25px) scale(.8)

    input[type='checkbox']
      display none
</style>
