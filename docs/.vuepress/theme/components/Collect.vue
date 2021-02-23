<!-- abyss-Collect -->
<template>
  <div class="Collect until-wapper" ref="Collect">
    <div
      class="collect-wapper"
      v-for="(collect, index) in $site.themeConfig.collect"
      :key="index"
    >
      <a
        class="collect-item"
        v-for="(item, _index) in collect.items"
        :key="_index"
        :href="item.url"
        target="_blank"
      >
        <div class="icon">
          <img :src="item.icon" />
        </div>
        <div class="info">
          <span class="text">{{ item.text || '未定义' }}</span>
          <span class="des">{{ item.des || '未定义' }}</span>
        </div>
      </a>
      <span class="collect-tag">{{ collect.text || '未定义' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let el = this.$refs.Collect
    this.$nextTick(() => {
      $anime({
        targets: el.querySelectorAll('.collect-wapper'),
        opacity: [0, 1],
        duration: 200,
        translateY: [10, 0],
        easing: 'linear',
        delay: function(el, i) {
          return i * 100
        },
      })
    })
  },
  methods: {},
}
</script>
<style lang="stylus">
.Collect
  padding-top ($navbarHeight / 2)
  .collect-wapper
    position relative
    background $abyss_bgColor
    margin-bottom calc(1.8rem + 20px)
    margin-top 30px
    .collect-item
      display inline-flex
      height $navbarHeight
      background $abyss_whiteColor
      color $abyss_textColor
      margin 20px
      cursor pointer
      transition .2s
      .icon
        width $navbarHeight
        line-height $navbarHeight
        background $abyss_whiteColor
        img
          height 100%
      .info
        width $navbarHeight * 2
        display flex
        flex-direction column
        justify-content space-evenly
        box-sizing border-box
        padding 5px 8px
        letter-spacing .5px
        span
          display block
          padding 0 8px
          text-align center
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
          &.text
            background $abyss_textColor
            color $abyss_whiteColor
            font-weight bold
          &.des
            font-size .85rem
      &:hover
        background $abyss_accentColor
    .collect-tag
      position absolute
      display inline-block
      padding 0 15px 0 10px
      height ($navbarHeight / 2)
      box-sizing border-box
      left 0
      top 0
      line-height ($navbarHeight / 2)
      transform translateY(-95%)
      clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%,0 100%)
      background $abyss_bgColor
      font-size .9rem
</style>
