<!-- abyss-Layout -->
<template>
  <div class="abyss-container">
    <Navbar />
    <Page v-if="ensurePath($page.path, '/blog/')" />
    <Collect v-else-if="ensurePath($page.path, '/collect/')" />
    <ContentGuide v-else-if="ensurePath($page.path, '/guide/')" />
    <Home v-else />
    <Footer v-if="!ensurePath($page.path, '/blog/')" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Collect from '@theme/components/Collect.vue'
import ContentGuide from '@theme/components/ContentGuide.vue'
import Home from '@theme/components/Home.vue'
import Footer from '@theme/components/Footer.vue'
import { ensurePath } from '../util'
export default {
  components: {
    Navbar,
    Page,
    Collect,
    ContentGuide,
    Home,
    Footer,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: { ensurePath },
}
</script>
