<template>
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-show="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div :class="{
            'sm:max-w-sm': size === 'sm',
            'sm:max-w-lg': size === 'lg',
            'sm:max-w-xl': size === 'xl',
            'sm:max-w-2xl': size === '2xl',
            'sm:max-w-3xl': size === '3xl',
            'sm:max-w-4xl': size === '4xl',
            'sm:max-w-5xl': size === '5xl',
            'sm:max-w-6xl': size === '6xl',
            'sm:max-w-7xl': size === '7xl',
            'sm:max-w-full': size === 'full'
           }"
             class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full"
             role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white sm:p-6 sm:pb-4">
            <slot name="body"></slot>
          </div>

          <slot name="footer">
            <div class="bg-gray-50 px-4 py-3 sm:px-6">
              <div class="sm:flex sm:flex-row-reverse">
                <button type="button" @click="ok"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Ок
                </button>
                <button type="button" @click="cancel"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Отмена
                </button>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'VueTwModal',
  props: {
    size: {
      type: String,
      default: 'lg'
    },
    isOpen: Boolean,
    ok: Function,
    cancel: Function
  }
}
</script>