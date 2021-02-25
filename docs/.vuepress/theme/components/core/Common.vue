<!-- abyssCore-Common -->
<template>
  <div class="abyss-container">
    <Navbar />
    <main class="container">
      <slot></slot>
    </main>
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Footer from '@theme/components/Footer.vue'
export default {
  props: {
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="stylus">
.abyss-container
  min-height 100vh
  background $abyss_whiteColor
  .container
    box-sizing border-box
    min-height 100vh
    padding-top $navbarHeight
</style>
