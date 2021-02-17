<template>
  <li @click="click" :class="{'shadow-custom': isActive, 'bg-gradient-to-b from-white to-gray-100': !isActive}" class="z-10 px-4 py-2 sm:mr-0.5 flex items-center font-medium text-gray-400 bg-white border-t border-r border-l border-gray-200 first:rounded-t-xl sm:rounded-t-xl cursor-pointer">
    <slot name="icon"></slot>
    <span :class="{'text-indigo-700': isActive}">{{ title }}</span>
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