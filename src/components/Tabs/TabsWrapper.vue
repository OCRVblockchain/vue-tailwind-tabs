<template>
  <ul class="flex">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Main',
  components: {},
  setup: () => {}
})
</script>

<style scoped>
</style>