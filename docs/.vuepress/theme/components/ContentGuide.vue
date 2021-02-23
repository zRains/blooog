<!-- abyss-Guide -->
<template>
  <div class="Guide" ref="Guide">
    <ContentSort :TAGS="tagSort(userContentList)" @reSort="reSort" />
    <section class="item-list">
      <ContentItem
        v-for="(item, index) in sorting
          ? sortContentList
          : userContentList.slice(0, ContentLimiter)"
        :key="index"
        :item="item"
      />
    </section>
  </div>
</template>

<script>
import ContentItem from '@theme/components/ContentItem.vue'
import ContentSort from '@theme/components/ContentSort.vue'
import { ensurePath, getDefaultTitle, tagSort } from '../util'
export default {
  components: {
    ContentItem,
    ContentSort,
  },
  computed: {
    userContentList() {
      let contentFilter = this.$site.pages.filter(item => {
        return ensurePath(item.path, '/blog/') && item.path !== '/blog/'
      })
      return contentFilter.map(item => {
        item.title = item.frontmatter.title || getDefaultTitle(item.path)
        return item
      })
    },
  },
  data() {
    return {
      sorting: false,
      dataState: 'ready',
      ContentLimiter: 4,
      sortContentList: [],
    }
  },
  mounted() {
    let _this = this
    window.onscroll = function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      if (Math.abs(scrollTop + windowHeight - scrollHeight) < 1) {
        _this.loadMore()
      }
    }
    this.articleAnime(this.$refs.Guide.querySelectorAll('article'))
  },
  methods: {
    tagSort,
    reSort(tags) {
      if (tags.length) {
        this.sorting = true
        this.sortContentList = this.userContentList.filter(item => {
          for (let i = 0; i < item.frontmatter.tag.length; i++)
            if (tags.includes(item.frontmatter.tag[i])) return true
          return false
        })
        console.log(this.sortContentList)
      } else this.sorting = false
    },
    loadMore() {
      this.dataState = 'loading'
      this.ContentLimiter += 3
      this.$nextTick(() => {
        this.articleAnime(
          [...this.$refs.Guide.querySelectorAll('article')].slice(
            this.ContentLimiter - 3,
            this.ContentLimiter
          )
        )
        this.dataState = 'ready'
      })
    },
    articleAnime(targets) {
      $anime({
        targets,
        opacity: [0, 1],
        duration: 200,
        translateY: [10, 0],
        easing: 'linear',
        delay: function(el, i) {
          return i * 100
        },
      })
    },
  },
}
</script>

<style lang="stylus">
.Guide
  .item-list
    article
      background $abyss_bgColor
      padding 20px
      &:not(:first-child)
        margin 20px 0
      .title,p
        font-size .9rem
        margin 0
      .title
        position relative
        display block
        margin-bottom 20px
        padding 0 10px
        border-left 8px solid $abyss_textColor
        transition .2s
        font-weight bold
        color $abyss_textColor
        &:before
          position absolute
          content ''
          height 100%
          width 0
          left -8px
          transition width .2s
          background $abyss_accentColor
        &:hover
          color $abyss_accentColor
          &:before
            width 8px
      .excerpt p
        letter-spacing 0.8px
        line-height 1.5rem
</style>
