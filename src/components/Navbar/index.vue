<template>
  <div class="h-16 bg-white shadow-lg flex items-center">
    <div class="px-10 py-10 cursor-pointer" @click="burger">
      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Navbar',
  components: {},
  props: {
    burger: {
      type: Function,
      required: true
    }
  },
  setup: () => {
  }
})
</script>

<style scoped>
</style>