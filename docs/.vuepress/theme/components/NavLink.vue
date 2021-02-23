<!-- abyss-NavLink -->
<template>
  <RouterLink class="nav-link" :to="item.link">
    {{ item.text }}
  </RouterLink>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
    },
  },
  methods: {},
}
</script>
