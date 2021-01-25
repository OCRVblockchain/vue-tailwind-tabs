<template>
  <div class="min-h-screen bg-blue-50 flex justify-center items-center">
    <div class="bg-gray-50 rounded-full w-96 h-96 flex justify-center items-center">
      <div class="bg-white rounded-2xl w-80 h-80 px-6 py-6">
        <span class="text-gray-600 font-medium text-xl">Вход</span>
        <div class="relative border-2 rounded-lg border-blue-100 mt-5 px-2 py-2">
          <div class="absolute inline-flex items-center bottom-0 top-0">
            <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
          <input class="pl-7 w-full outline-none text-gray-500" type="text" placeholder="Электронная почта">
        </div>
        <div class="relative border-2 rounded-lg border-blue-100 mt-3 px-2 py-2">
          <div class="absolute inline-flex items-center bottom-0 top-0">
            <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input class="pl-7 w-full outline-none text-gray-500" type="password" placeholder="Пароль">
        </div>
        <router-link to="/">
          <button class="mt-3 w-full py-2 bg-blue-500 rounded-lg focus:outline-none">
            <span class="text-white">Войти</span>
          </button>
        </router-link>
        <div class="mt-9 flex justify-center">
          <span class="text-gray-500">
            Еще нет аккаунта?
          </span>
          <a class="pl-1 text-blue-500 font-medium underline" href="#" @click="signUp">Регистрация</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'SignIn',
  props: {
    signUp: {
      type: Function,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
</style>