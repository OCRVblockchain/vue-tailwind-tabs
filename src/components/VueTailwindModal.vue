<template>
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-show="showing" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">

        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <button
              v-if="showClose"
              aria-label="close"
              class="absolute z-50 bg-white rounded-full py-2 px-2 top-3 right-3 cursor-pointer focus:outline-none"
              @click.prevent="close()"
          >
            <svg class="h-4 w-4 text-gray-600"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="m-8 inline-block align-middle w-full overflow-hidden max-w-2xl bg-white rounded-lg shadow-xl transform transition-all">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'VueTailwindModal',
  props: {
    showing: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit('update:showing', false)
      this.$emit('close')
    }
  }
}
</script>