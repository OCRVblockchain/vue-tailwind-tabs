<template>
  <section class="bg-white shadow-lg rounded-r-xl rounded-b-xl">
    <div class="p-5 text-gray-700">
      <slot/>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tab Content',
  props: {}
})
</script>

<style scoped>
</style>