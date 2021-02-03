<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <a href="/#features" class="text-gray-600 font-medium" @focus="showMenu" @keydown.shift.tab="hideMenu" @keydown.esc.exact="hideMenu">Возможности</a>

    <div class="absolute w-full">&nbsp;</div>
    <transition name="mega-menu-fade">
      <div v-show="isVisible" class="absolute bg-white shadow-md rounded-lg border w-160 mt-4" style="margin-left: -50px;">
        <div class="flex px-8 py-6 border-b">
          <ul class="w-1/2 pr-4">
            <li class="mb-8">
              <a href="#" class="flex group" @keydown.esc.exact="hideMenu">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Обозреватель</span>
                <span
                    class="block text-sm text-gray-400 group-hover:text-blue-600">Удобный инструмент изучения блокчейн</span>
              </span>
              </a>
            </li>
            <li class="mb-8">
              <a href="#" class="flex group">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Эффективность</span>
                <span class="block text-sm text-gray-400 group-hover:text-blue-600">Целевые показатели на приборной панеле</span>
              </span>
              </a>
            </li>
            <li class="mb-8">
              <a href="#" class="flex group">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Безопасность</span>
                <span class="block text-sm text-gray-400 group-hover:text-blue-600">Данные невозможно удалить или подделать</span>
              </span>
              </a>
            </li>
          </ul>
          <ul class="w-1/2 pl-4">
            <li class="mb-8">
              <a href="#" class="flex group">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Обучение</span>
                <span
                    class="block text-sm text-gray-400 group-hover:text-blue-600">Помощь в освоении новой технологии</span>
              </span>
              </a>
            </li>
            <li class="mb-8">
              <a href="#" class="flex group">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Гибкость</span>
                <span class="block text-sm text-gray-400 group-hover:text-blue-600">Настройка под ваши задачи</span>
              </span>
              </a>
            </li>
            <li class="mb-8">
              <a href="#" class="flex group">
                <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="ml-2">
                <span class="block font-bold text-blue-500 group-hover:text-blue-600">Оповещения</span>
                <span class="block text-sm text-gray-400 group-hover:text-blue-600">Система предупредит о важном</span>
              </span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="bg-gray-100 px-8 py-8">
          <li class="mb-6">
            <a href="#" class="flex items-center">
              <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span class="block ml-2 font-bold text-blue-500">Документация</span>
              <span class="block ml-4 text-sm text-gray-400">Начните интеграцию с нашими инструментами</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center" @keydown.tab.exact="hideMenu">
              <svg class="w-6 h-6 text-blue-500 group-hover:text-blue-600" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
              </svg>
              <span class="block ml-2 font-bold text-blue-500">API для разработчиков</span>
              <span class="block ml-4 text-sm text-gray-400">Официальные библиотеки для нашего API</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'MegaMenu',
  setup: () => {
    const isVisible = ref(false)
    const showMenu = () => {
      isVisible.value = true
    }
    const hideMenu = () => {
      isVisible.value = false
    }

    return {isVisible, showMenu, hideMenu}
  }
})
</script>

<style scoped>
.mega-menu-fade-enter-active, .mega-menu-fade-leave-active {
  transition: all .2s ease-in-out;
}

.mega-menu-fade-enter, .mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>