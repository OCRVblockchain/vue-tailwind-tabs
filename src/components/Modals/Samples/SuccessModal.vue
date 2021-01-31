<template>
  <BaseModal :isOpen="isOpen" size="lg">
    <template v-slot:body>
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
          <!-- Heroicon name: check -->
          <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            {{ title }}
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              {{ msg }}
            </p>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="sm:flex sm:flex-row-reverse">
        <button type="button" @click="ok" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
          Ок
        </button>
        <button type="button" @click="cancel" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Отмена
        </button>
      </div>
    </template>
  </BaseModal>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import BaseModal from '../BaseModal.vue'

export default defineComponent({
  name: 'Warning Modal',
  components: {
    BaseModal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    ok: Function,
    cancel: Function
  },
  setup: () => {}
})
</script>

<style scoped>
</style>