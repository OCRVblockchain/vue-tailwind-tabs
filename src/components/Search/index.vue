<template>
  <div class="relative mx-auto text-gray-600">
    <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
           type="text" name="search" placeholder="Поиск">
    <button type="submit" class="absolute inline-flex items-center bottom-0 top-0 right-4 focus:outline-none">
      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Search',
  setup: () => {

  }
})
</script>

<style scoped>
</style>