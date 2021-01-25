<template>
  <div class="h-16 bg-white shadow-lg flex items-center">
    <ul class="flex items-center">
      <li>
        <div class="px-10 py-10 cursor-pointer" @click="burger">
          <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </div>
      </li>
      <li>
        <Search />
      </li>
      <li class="ml-36">
        <MegaMenu />
      </li>
      <li class="ml-12 text-gray-600 font-medium">
        <a href="/#integration">Интеграция</a>
      </li>
      <li class="ml-12 text-gray-600 font-medium">
        <a href="/#explorer">Обозреватель</a>
      </li>
      <li class="ml-12 text-gray-600 font-medium">
        <a href="/#explorer">Помощь</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import Search from './Search/index.vue'
import MegaMenu from './MegaMenu/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Search,
    MegaMenu
  },
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