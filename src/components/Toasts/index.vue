<template>
  <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div class="fixed right-0 top-0 m-5">
      <div v-for="t in toasts" :key="t.id" :class="{
        'bg-red-400': t.type === 'error',
        'bg-yellow-400': t.type === 'warning',
        'bg-green-400': t.type === 'success'
        }" class="rounded shadow-2xl pl-1.5 overflow-hidden mb-2">
        <div class="relative bg-white border border-gray-100 px-5 py-5" role="alert">
          <!-- Heroicon name: x -->
          <svg class="absolute top-3 right-3 h-4 w-4 text-gray-400 cursor-pointer" @click="closeToast(t.id)"
               xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <p class="font-bold">{{ t.title }}</p>
          <p class="text-gray-500">{{ t.text }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

interface Toast {
  id: string,
  title: string,
  text: string,
  type: 'error' | 'warning' | 'success'
}

interface Data {
  toasts: Toast[]
}

export default defineComponent({
  name: 'Toasts',
  data(): Data {
    return {
      toasts: []
    }
  },
  mounted() {
    this.emitter.on('toast', (toast: Toast) => {
      const id = this.getToastUuid()
      if (typeof id !== 'undefined') {
        toast.id = id
        this.toasts.push(toast)
        setTimeout(() => {
          this.closeToast(toast.id)
        }, 5000)
      }
    })
  },
  methods: {
    getToastUuid(): string {
      return 'toast-' + Date.now() + '-' + Math.floor(Math.random() * 10)
    },
    closeToast(id: string): void {
      this.toasts = this.toasts.filter(t => t.id != id)
    }
  }
})
</script>

<style scoped>
</style>