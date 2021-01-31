<template>
    <main class="min-h-screen bg-blue-50">
      <Toasts />

      <SuccessModal :isOpen="isOpenSuccessModal" :ok="hideModals" :cancel="hideModals" title="Регистрация пройдена" msg="Вы успешно зарегистрированы и можете начать работу." />
      <WarningModal :isOpen="isOpenWarningModal" :ok="hideModals" :cancel="hideModals" title="Смена пароля" msg="Для продолжения, необходимо ваше подтверждение. " />
      <DangerModal :isOpen="isOpenDangerModal" :ok="hideModals" :cancel="hideModals" title="Удаление аккаунта" msg="Это действие будет невозможно отменить." />

      <nav>
        <Navbar :burger="toggle"/>
      </nav>

      <section class="flex px-5 py-5">
        <aside>
          <Sidebar :isOpen="isOpen"/>
        </aside>

        <div class="h-full ml-5">
          <p>
            <button type="button" @click="isOpenSuccessModal = true" class="focus:outline-none bg-green-600 text-white px-8 py-2 rounded-lg">Регистрация</button>
            <button type="button" @click="isOpenWarningModal = true" class="focus:outline-none bg-yellow-400 text-white ml-3 px-8 py-2 rounded-lg">Смена пароля</button>
            <button type="button" @click="isOpenDangerModal = true" class="focus:outline-none bg-red-600 text-white ml-3 px-8 py-2 rounded-lg">Удаление аккаунта</button>
          </p>
          <p>
            <button type="button" @click="sendMessage()" class="focus:outline-none bg-blue-600 text-white mt-3 px-8 py-2 rounded-lg">Отправить уведомление</button>
          </p>

        </div>
      </section>

    </main>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import Navbar from '../Navbar/index.vue'
import Sidebar from '../Sidebar/index.vue'
import SuccessModal from '../Modal/Samples/Success.vue'
import WarningModal from '../Modal/Samples/Warning.vue'
import DangerModal from '../Modal/Samples/Danger.vue'
import Toasts from "../Toasts/index.vue";


export default defineComponent({
  name: 'Main',
  components: {
    Navbar,
    Sidebar,
    DangerModal,
    WarningModal,
    SuccessModal,
    Toasts
  },
  data() {
    return {
      isOpen: false,
      isOpenDangerModal: false,
      isOpenWarningModal: false,
      isOpenSuccessModal: false
    }
  },
  methods: {
    toggle(): void {
      this.isOpen = !this.isOpen
    },
    hideModals(): void {
      this.isOpenDangerModal = false
      this.isOpenWarningModal = false
      this.isOpenSuccessModal = false
    },
    sendMessage(): void {
      const toast= {
        title: 'Тест',
        text: 'Какой-то текст',
        type: 'warning'
      }

      this.emitter.emit('toast', toast)
    }
  }
})
</script>

<style scoped>
</style>