<template>
  <table class="w-full">
    <thead class="bg-gray-100">
    <slot name="head" :data="headers">
      <tr>
        <th v-for="(value, key) in headers" :key="key" scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider first:rounded-l-lg last:rounded-r-lg">
          {{ value }}
        </th>
      </tr>
    </slot>
    </thead>
    <tbody class="bg-white">
    <slot name="rows" :data="data">
      <tr v-for="(row, key) in data" :key="key">
        <td v-for="(value, key) in row" :key="key"
            class="px-6 py-4 whitespace-nowrap text-gray-500 first:rounded-l-lg last:rounded-r-lg">
          {{ value }}
        </td>
      </tr>
    </slot>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Main',
  components: {},
  props: {
    data: {
      type: Array,
      default: []
    },
    headers: {
      type: Array,
      default: []
    }
  },
  setup: () => {

  }
})
</script>

<style scoped>
</style>