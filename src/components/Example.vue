<template>
  <div class="px-5 py-5">
    <VueTailwindModal :showing="showing" @update:showing="showing = $event" @close="close()">
      <div class="flex">
        <div class="flex flex-col justify-center">
          <div class="px-10 py-10">
            <span class="flex justify-center text-gray-600 font-medium text-3xl">Присоединяйтесь</span>
            <div class="mt-2 flex justify-center">
            <span class="text-gray-500">
              Уже зарегистрированы?
            </span>
              <a class="pl-1 text-red-500 font-medium underline" href="#" @click="signIn">Вход</a>
            </div>
            <div class="relative border-2 rounded-lg border-red-100 mt-5 px-2 py-2">
              <div class="absolute inline-flex items-center bottom-0 top-0">
                <svg class="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input class="pl-7 w-full outline-none text-gray-500" type="text" placeholder="Полное имя">
            </div>
            <div class="relative border-2 rounded-lg border-red-100 mt-3 px-2 py-2">
              <div class="absolute inline-flex items-center bottom-0 top-0">
                <svg class="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
              </div>
              <input class="pl-7 w-full outline-none text-gray-500" type="text" placeholder="Электронная почта">
            </div>
            <div class="relative border-2 rounded-lg border-red-100 mt-3 px-2 py-2">
              <div class="absolute inline-flex items-center bottom-0 top-0">
                <svg class="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input class="pl-7 w-full outline-none text-gray-500" type="password" placeholder="Пароль">
            </div>
            <div class="relative border-2 rounded-lg border-red-100 mt-3 px-2 py-2">
              <div class="absolute inline-flex items-center bottom-0 top-0">
                <svg class="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input class="pl-7 w-full outline-none text-gray-500" type="password" placeholder="Подтверждение пароля">
            </div>
            <button class="mt-3 w-full py-2 bg-red-500 rounded-lg focus:outline-none">
              <span class="text-white">Зарегистрироваться</span>
            </button>
          </div>
        </div>
        <div class="flex">
          <img class="object-cover h-full" src="./assets/image.png">
        </div>
      </div>
    </VueTailwindModal>

    <button type="button" @click="showing = true"
            class="focus:outline-none bg-green-600 text-white ml-3 px-8 py-2 rounded-lg">
      Нажмите
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import VueTailwindModal from './VueTailwindModal.vue'

export default defineComponent({
  name: 'ExampleModal',
  components: {
    VueTailwindModal
  },
  data() {
    return {
      showing: false
    }
  },
  methods: {
    close() {
      console.log("after close...")
    }
  }
})
</script>