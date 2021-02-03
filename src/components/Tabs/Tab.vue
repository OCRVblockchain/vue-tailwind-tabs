<template>
  <li :class="{'bg-gradient-to-b from-white to-gray-100 rounded-t-xl border border-gray-100': !isActive}" class="flex items-center px-4 py-2 bg-white rounded-t-xl">
    <slot>
      <svg :class="{'text-indigo-700': isActive, 'font-medium text-gray-400': !isActive}" class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
      </svg>
      <span :class="{'text-indigo-700': isActive, 'font-medium text-gray-400': !isActive}" class="font-medium">Все заявки</span>
    </slot>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Main',
  components: {},
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  setup: () => {

  }
})
</script>

<style scoped>
</style>