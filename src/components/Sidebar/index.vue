<template>
  <div :class="isOpen ? 'w-64' : 'w-16'" class="h-full w-16 bg-white rounded-2xl shadow-2xl flex flex-col justify-between">
    <div>
      <div class="flex items-center px-3 py-3 mb-12 cursor-pointer">
        <div :class="isOpen ? 'transition-all duration-300' : ''" class="transform w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        </div>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Мария Арден</a>
      </div>
      <div class="mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
        <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Главная</a>
      </div>
      <div class="mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
        <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Проекты</a>
      </div>
      <div class="mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
        <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Сервисы</a>
      </div>
      <div class="mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
        <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Пользователи</a>
      </div>

      <div class="mt-7 pt-7 border-t">
        <div :class="isOpen ? 'flex-row' : 'flex-col'"
            class="transition-all duration-300 mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
          <svg :class="isOpen ? 'sm:ml-5' : ''" class="transition-all duration-300 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <a :class="isOpen ? 'block' : 'hidden'" class="transition-all duration-300 pl-3 font-semibold text-sm text-gray-500">Уведомления</a>
          <span :class="isOpen ? 'sm:mt-0 sm:ml-14' : ''" class="transition-all duration-300 mt-1 px-2 font-semibold text-sm text-red-600 bg-red-200 rounded-xl">
                23
          </span>
        </div>
      </div>
    </div>
    <div class="mt-9 pt-9 border-t">
      <div class="mb-1 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
        <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Настройки</a>
      </div>
      <router-link to="/login">
        <div class="mb-4 w-full h-12 border-l-2 border-white hover:border-blue-500 flex items-center cursor-pointer">
          <svg class="ml-5 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <a :class="isOpen ? '' : 'hidden'" class="pl-3 font-semibold text-sm text-gray-500">Выход</a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'Sidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup: () => {

  }
})
</script>

<style scoped>
</style>