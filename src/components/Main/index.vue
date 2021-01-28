<template>
    <main class="min-h-screen bg-blue-50">
      <SuccessModal :isOpen="isOpenSuccessModal" :ok="hideModals" :cancel="hideModals" title="Регистрация пройдена" msg="Вы успешно зарегистрированы и можете начинать работу." />
      <WarningModal :isOpen="isOpenWarningModal" :ok="hideModals" :cancel="hideModals" title="Смена пароля" msg="Для продолжения, необходимо ваше подтверждение." />
      <DangerModal :isOpen="isOpenDangerModal" :ok="hideModals" :cancel="hideModals" title="Удаление аккаунта" msg="Это действие будет невозможно отменить." />

      <nav>
        <Navbar :burger="toggle"/>
      </nav>

      <section class="flex px-5 py-5">
        <aside>
          <Sidebar :isOpen="isOpen"/>
        </aside>

        <div class="h-full ml-5">
          <button type="button" @click="isOpenSuccessModal = true" class="focus:outline-none bg-green-600 text-white px-8 py-2 rounded-lg">Регистрация</button>
          <button type="button" @click="isOpenWarningModal = true" class="focus:outline-none bg-yellow-600 text-white ml-3 px-8 py-2 rounded-lg">Смена пароля</button>
          <button type="button" @click="isOpenDangerModal = true" class="focus:outline-none bg-red-600 text-white ml-3 px-8 py-2 rounded-lg">Удаление аккаунта</button>
        </div>
      </section>

    </main>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'
import Navbar from '../Navbar/index.vue'
import Sidebar from '../Sidebar/index.vue'
import { DangerModal, WarningModal, SuccessModal } from '../Modals/index.ts'

export default defineComponent({
  name: 'Main',
  components: {
    Navbar,
    Sidebar,
    DangerModal,
    WarningModal,
    SuccessModal
  },
  setup: () => {
    const isOpen = ref(false)
    const toggle = () => {
        isOpen.value = !isOpen.value
    }

    const isOpenDangerModal = ref(false)
    const isOpenWarningModal = ref(false)
    const isOpenSuccessModal = ref(false)
    const hideModals = () => {
      isOpenDangerModal.value = false
      isOpenWarningModal.value = false
      isOpenSuccessModal.value = false
    }

    return {isOpen, toggle, hideModals, isOpenDangerModal, isOpenWarningModal, isOpenSuccessModal}
  }
})
</script>

<style scoped>
</style>