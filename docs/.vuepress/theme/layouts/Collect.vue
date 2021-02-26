<!-- abyss-Collect -->
<template>
  <Common>
    <div class="Collect" ref="Collect">
      <div
        class="collect-wapper"
        v-for="(collect, index) in $site.themeConfig.collect"
        :key="index"
      >
        <div class="collect-tag">{{ collect.text || '未定义' }}</div>
        <div class="collect-container">
          <a
            class="collect-item"
            v-for="(item, _index) in collect.items"
            :key="_index"
            :href="item.url"
            target="_blank"
          >
            <div class="icon">
              <img :src="item.icon" v-if="item.icon" />
              <div v-else>{{ item.text[0] }}</div>
            </div>
            <div class="info">
              <span class="text">{{ item.text || '未定义' }}</span>
              <span class="des">{{ item.des || '未定义' }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Common>
</template>

<script>
import Common from '@theme/components/core/Common.vue'
export default {
  components: {
    Common,
  },
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
  .collect-wapper
    padding-top 20px
    position relative
    background $abyss_bgColor
    margin-bottom calc(1.8rem + 20px)
    .collect-tag
      margin-left 20px
      padding 0 10px
      border-left 8px solid $abyss_textColor
      transition .2s
      font-size .9rem
      font-weight bold
      color $abyss_textColor
    .collect-container
      padding 20px
      display grid
      grid-template-columns 'repeat(auto-fill, minmax(%s, 1fr))' % ($navbarHeight * 3)
      grid-template-rows 'repeat(auto-fill, minmax(%s, 1fr))' % $navbarHeight
      gap 20px
      .collect-item
        display inline-flex
        height $navbarHeight
        background $abyss_whiteColor
        color $abyss_textColor
        cursor pointer
        transition .2s
        .icon
          position relative
          width $navbarHeight
          line-height $navbarHeight
          background $abyss_whiteColor
          div
            position absolute
            width $navbarHeight
            text-align center
            font-size 1.8rem
            font-weight bold
            background $abyss_textColor
            color $abyss_whiteColor
          img
            height 100%
        .info
          flex-grow 1
          display flex
          flex-direction column
          justify-content space-evenly
          align-items center
          box-sizing border-box
          padding 5px 8px
          letter-spacing .5px
          span
            max-width $navbarHeight * 2
            display block
            padding 0 8px
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap
            &.text
              background $abyss_textColor
              color $abyss_whiteColor
              letter-spacing 0px
              font-weight bold
            &.des
              font-size .85rem
              color #999

        &:hover
          background $abyss_accentColor
</style>
