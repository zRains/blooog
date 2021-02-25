<!-- abyss-ContentSort -->
<template>
  <div class="ContentSort">
    <label class="sort-dropdown">
      <div :class="{ title: true, isOpen }" @click="isOpen = !isOpen">
        <span>标签</span>
        <span>{{ Object.keys(TAGS).length }}</span>
      </div>
    </label>
    <div :class="{ tag: true, isOpen }" ref="tag">
      <div
        :class="{ 'tag-item': true, active: sortTag.includes(index) }"
        v-for="(val, key, index) in TAGS"
        :key="index"
        @click="reSort(index)"
      >
        <span>{{ key }}</span>
        <span>{{ val._length }}</span>
      </div>
    </div>
    <div
      class="tag-mask"
      :style="'height:' + (isOpen ? tagHeight : 0) + 'px'"
    ></div>
  </div>
</template>

<script>
import { tagSort } from '../util'
export default {
  props: {
    TAGS: {
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      tagHeight: 0,
      sortTag: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.tagHeight = this.$refs.tag.clientHeight + 20
    })
  },
  methods: {
    reSort(index) {
      if (!this.sortTag.includes(index)) this.sortTag.push(index)
      else {
        this.sortTag = this.sortTag.filter(_index => _index !== index)
      }
      this.$emit(
        'reSort',
        this.sortTag.map(_index => {
          return Object.keys(this.TAGS)[_index]
        })
      )
    },
  },
}
</script>

<style lang="stylus">
$sup_span
  margin-left 10px
  padding 0 5px
  background $abyss_textColor
  color $abyss_whiteColor
.ContentSort
  position relative
  margin-bottom 20px
  background $abyss_bgColor
  padding 20px
  overflow hidden
  .sort-dropdown
    .title
      position relative
      font-size .9rem
      font-weight bold
      cursor pointer
      span:last-child
        @extend $sup_span
      &:after
        position absolute
        content ''
        right 0
        top 40%
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-top 7px solid $abyss_textColor
        border-bottom 0
        transition .2s
      &.isOpen:after
        transform rotate(180deg)
  .tag-mask
    transition height .2s
  .tag
    position absolute
    margin-top 20px
    width calc(100% - 40px)
    visibility hidden
    opacity 0
    transition .2s
    transition-delay .2s
    .tag-item
      display inline-flex
      align-items center
      height 20px
      font-size .85rem
      font-weight bold
      padding 5px 10px
      margin 5px
      background $abyss_deepBgColor
      cursor pointer
      transition background-color .2s
      span:last-child
        @extend $sup_span
      &:hover,&.active
        background $abyss_accentColor
    &.isOpen
      visibility visible
      opacity 1
</style>
