<!-- abyss-ContentPage -->
<template>
  <div class="Page" ref="Page">
    <div class="page-container">
      <Content class="abyss page-left" ref="content" />
      <div class="page-right">
        <section class="content-info">
          <div class="title">{{ $page.title }}</div>
          <div class="tag">
            <span v-for="(tag, index) in $page.frontmatter.tag" :key="index">{{
              tag
            }}</span>
          </div>
        </section>
        <section class="content-header">
          <div>目录</div>
          <div>
            <ul ref="header">
              <li
                :class="{
                  active: (scrollTarget < 0 ? 0 : scrollTarget) === index,
                }"
                @click="targetClick(index, $event.target)"
                v-for="(header, index) in contentHeader"
                :key="index"
              >
                <a :href="header.target" :style="'--i:' + header.indent">{{
                  header.title
                }}</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ensurePath, getHeaders } from '../util'
export default {
  data() {
    return {
      contentHeader: [],
      scrollTarget: 0,
      clickTrack: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.contentHeader = getHeaders(this.$refs.content.$el)
      let virTimeout
      let _this = this
      let scrollOffset = _this.contentHeader.map(item => item.offset - 20)
      window.onscroll = function() {
        if (virTimeout) clearTimeout(virTimeout)
        if (_this.clickTrack) {
          _this.clickTrack = false
          return
        }
        virTimeout = setTimeout(() => {
          let scroll = document.documentElement.scrollTop
          _this.scrollTarget =
            [scroll, ...scrollOffset].sort((a, b) => a - b).indexOf(scroll) - 1
          _this.targetClick(
            _this.scrollTarget,
            _this.$refs.header.querySelectorAll('li')[
              _this.scrollTarget < 0 ? 0 : _this.scrollTarget
            ]
          )
        }, 500)
      }
      $anime({
        targets: this.$refs.Page.querySelectorAll('.page-left,.page-right'),
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
  methods: {
    ensurePath,
    targetClick(index, t) {
      let targetHeight = window.document.documentElement.clientHeight / 2
      let clickTargetOffsetTop = t.offsetTop
      let ulOffsetTop = parseInt(this.$refs.header.style.marginTop) || 0
      let offset = ulOffsetTop + targetHeight - clickTargetOffsetTop
      this.scrollTarget = index
      this.clickTrack = true
      this.$refs.header.style.marginTop = (offset > 0 ? 0 : offset) + 'px'
    },
  },
}
</script>
<style lang="stylus">
.Page
  .page-container
    display flex
    .page-left
      max-width: $contentWidth
      min-width: 0
    .page-right
      min-width: ($contentWidth / 3) - 20px
      margin-left: 20px
      .content-info
        padding: 20px
        background: $abyss_bgColor
        .title
          font-size: 0.9rem
          font-weight: bold
          margin-bottom: 10px
        .tag span
          display: inline-block
          margin: 0 5px
          padding: 2px 5px
          font-size: 0.85rem
          font-weight: bold
          background: $abyss_textColor
          line-height: 100%
          color: #fff
      .content-header
        display: flex
        flex-direction: column
        position: sticky
        top: 'calc(%s + 20px)' % $navbarHeight
        height: 'calc(100vh - %s - 20px)' % $navbarHeight
        margin-top: 20px
        div:nth-child(1)
          height: 20px
          line-height: 20px
          padding-left: 5px
          font-size: 0.9rem
          font-weight: bold
        div:nth-child(2)
          flex-grow: 1
          overflow: hidden
          ul
            padding: 0 20px
            margin: 0
            li
              list-style: none
              margin: 4px 0
              a
                position: relative
                display: block
                box-sizing: border-box
                padding-left: calc(var(--i) * 15px)
                font-size: calc(0.9rem - var(--i) * 0.03rem)
                &::after
                  position: absolute
                  content: ''
                  height: 8px
                  width: 8px
                  top: calc(50% - 4px)
                  left: calc(var(--i) * 15px - 11.5px)
                  background: currentColor
                  transition: background 0.2s
              &.active, &:hover
                a
                  color: $abyss_accentColor
                  &:after
                    background: $abyss_accentColor
</style>
