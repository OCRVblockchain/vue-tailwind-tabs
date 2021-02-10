<template>
  <li @click="click" :class="{'bg-gradient-to-b from-white to-gray-100': !isActive}" class="px-4 py-2 sm:mr-0.5 flex items-center bg-white border-b border-gray-100 sm:border-0 first:rounded-t-xl sm:rounded-t-xl cursor-pointer">
    <slot name="icon"></slot>
    <span :class="{'text-indigo-700': isActive}" class="font-medium text-gray-400">{{ title }}</span>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Tab',
  props: {
    title: String,
    isActive: Boolean,
    click: Function
  }
})
</script>

<style scoped>
</style>