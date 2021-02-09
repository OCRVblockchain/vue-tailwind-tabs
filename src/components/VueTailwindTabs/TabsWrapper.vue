<template>
  <ul class="block sm:flex">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tabs Wrapper'
})
</script>

<style scoped>
</style>