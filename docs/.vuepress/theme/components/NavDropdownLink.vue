<!-- abyss-NavDropdownLink -->
<template>
  <div class="NavDropdownLink">
    <span>{{ item.text }}</span>
    <span></span>
    <div class="dropdown">
      <NavLink
        v-for="(dropdown_item, index) in item.items"
        :key="index"
        :item="dropdown_item"
      />
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
export default {
  components: {
    NavLink,
  },
  props: {
    item: {
      required: true,
    },
  },
  methods: {},
}
</script>
<style lang="stylus">
.NavDropdownLink
  position: relative;
  height 100%
  display flex
  align-items center
  user-select none
  span
    display inline-block
    &:nth-child(2)
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid #ccc
      border-bottom 0
      margin-left 5px
      transform translateY(50%)
  .dropdown
    background #fff
    position absolute
    box-sizing border-box
    min-width 100%
    top 100%
    right 0
    padding 8px
    box-shadow 0 3px 20px  rgba(0,0,0,0.2)
    user-select text
    transform scale(.8)
    transition-property opacity,transform,visibility
    transition-duration .2s
    transition-timing-function cubic-bezier(.24,.22,.015,1.56)
    visibility hidden
    opacity 0
    a
      display block
      box-sizing border-box
      white-space nowrap
      padding 5px
      &:hover
        background $abyss_bgColor
  &:hover .dropdown
    visibility visible
    opacity 1
    transform scale(1)
</style>
