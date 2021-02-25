<!-- abyss-Layout -->
<template>
  <Common :showFooter="false">
    <component :is="$frontmatter.title === undefined ? Home : Page" />
    <Footer v-if="$frontmatter.home" />
  </Common>
  <!-- <div class="abyss-container">
    <Navbar />
    <Page v-if="ensurePath($page.path, '/blog/')" />
    <Collect v-else-if="ensurePath($page.path, '/collect/')" />
    <ContentGuide v-else-if="ensurePath($page.path, '/guide/')" />
    <Home v-else />
    <Footer v-if="!ensurePath($page.path, '/blog/')" />
  </div> -->
</template>

<script>
import Common from '@theme/components/core/Common.vue'
import Page from '@theme/components/Page.vue'
// import Collect from '@theme/components/Collect.vue'
// import ContentGuide from '@theme/components/ContentGuide.vue'
import Home from '@theme/components/Home.vue'
import HomeDefault from '@theme/components/core/HomeDefault.vue'
// import Footer from '@theme/components/Footer.vue'
import { ensurePath } from '../util'
export default {
  components: {
    Common,
  },
  data() {
    return { Home, HomeDefault, Page }
  },
  mounted() {
    console.log(this.$page)
  },
  methods: { ensurePath },
}
</script>
