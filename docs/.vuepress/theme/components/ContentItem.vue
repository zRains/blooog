<!-- abyss-ContentItem -->
<template>
  <article class="ContentItem">
    <RouterLink
      class="content-link sketch-amine title"
      :to="item.regularPath"
      v-html="letterSlicer(item.title)"
    ></RouterLink>
    <p class="time"></p>
    <div class="excerpt" v-html="item.excerpt"></div>
  </article>
</template>

<script>
import { letterSlicer } from '../util'
export default {
  props: {
    item: {
      required: true,
    },
  },

  methods: {
    letterSlicer,
  },
}
</script>
