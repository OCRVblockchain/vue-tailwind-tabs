<template>
  <main class="min-h-screen bg-blue-50">
    <Toasts/>

    <SuccessModal :isOpen="isOpenSuccessModal" :ok="hideModals" :cancel="hideModals" title="Регистрация пройдена"
                  msg="Вы успешно зарегистрированы и можете начать работу."/>
    <WarningModal :isOpen="isOpenWarningModal" :ok="hideModals" :cancel="hideModals" title="Смена пароля"
                  msg="Для продолжения, необходимо ваше подтверждение. "/>
    <DangerModal :isOpen="isOpenDangerModal" :ok="hideModals" :cancel="hideModals" title="Удаление аккаунта"
                 msg="Это действие будет невозможно отменить."/>
    <ModalWithForm :isOpen="isOpenModalWithForm" :close="hideModals"/>

    <Navbar :burger="toggle">
      <div>
        <Search/>
      </div>
      <div class="ml-12">
        <MegaMenu/>
      </div>
      <div class="ml-12 text-gray-600 font-medium">
        <a href="/#integration">Интеграция</a>
      </div>
      <div class="ml-12 text-gray-600 font-medium">
        <a href="/#explorer">Обозреватель</a>
      </div>
      <div class="ml-12 text-gray-600 font-medium">
        <a href="/#explorer">Помощь</a>
      </div>
      <div class="w-full px-6 flex justify-end">
        <button type="button" @click="isOpenModalWithForm = true"
                class="focus:outline-none bg-green-600 text-white ml-3 px-8 py-2 rounded-lg">Присоединиться
        </button>
      </div>
    </Navbar>

    <section class="flex px-5 py-5">
      <aside>
        <Sidebar :isOpen="isOpen"/>
      </aside>

      <!--      <div class="w-full h-full ml-5">-->
      <!--        <p>-->
      <!--          <button type="button" @click="isOpenSuccessModal = true"-->
      <!--                  class="focus:outline-none bg-green-600 text-white px-8 py-2 rounded-lg">Регистрация-->
      <!--          </button>-->
      <!--          <button type="button" @click="isOpenWarningModal = true"-->
      <!--                  class="focus:outline-none bg-yellow-400 text-white ml-3 px-8 py-2 rounded-lg">Смена пароля-->
      <!--          </button>-->
      <!--          <button type="button" @click="isOpenDangerModal = true"-->
      <!--                  class="focus:outline-none bg-red-600 text-white ml-3 px-8 py-2 rounded-lg">Удаление аккаунта-->
      <!--          </button>-->
      <!--        </p>-->
      <!--        <p>-->
      <!--          <button type="button" @click="sendMessage()"-->
      <!--                  class="focus:outline-none bg-blue-600 text-white mt-3 px-8 py-2 rounded-lg">Отправить уведомление-->
      <!--          </button>-->
      <!--        </p>-->


      <!--      </div>-->

      <div class="w-full flex flex-col px-5">
        <TabsWrapper>
          <Tab>
            <svg class="w-6 h-6 text-indigo-700 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
            <span class="font-medium text-indigo-700">Все заявки</span>
          </Tab>
          <Tab :isActive="false">
            <svg class="w-6 h-6 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="font-medium text-gray-400">Активные</span>
          </Tab>
          <Tab :isActive="false">
            <svg class="w-6 h-6 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="font-medium text-gray-400">К оплате</span>
          </Tab>
        </TabsWrapper>

        <div class="bg-white shadow-lg rounded-r-xl rounded-b-xl">
          <div class="px-2 py-4">
            <Table :data="[
          {
            name: 'Alfonso Bribiesca',
            email: 'alfonso@vexilo.com',
            status: 'active',
            sales: 9999
          },
          {
            name: 'Saida Redondo',
            email: 'saida@gmail.com',
            status: 'active',
            sales: 1500
          },
          {
            name: 'Regina Bribiesca',
            email: 'regina@gmail.com',
            status: 'active',
            sales: -200.50
          },
          {
            name: 'Ricardo Martinez',
            email: 'rickyrickky@gmail.com',
            status: 'active',
            sales: 0.0
          }
        ]" :headers="['Имя', 'Подразделение', 'Статус', 'Продажи', '']">
              <template v-slot:rows="slotProps">
                <tr :class="{ 'bg-gray-50': (idx+1) % 2 === 0 }" v-for="(row, idx) in slotProps.data" :key="idx">
                  <td class="py-4 whitespace-nowrap rounded-l-lg">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ row.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ row.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ row.status }}
                </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ row.sales }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-400 rounded-r-lg">
                    <div class="flex justify-end">
                      <svg class="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                      </svg>
                    </div>
                  </td>
                </tr>
              </template>
            </Table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Navbar from '../Navbar/index.vue'
import Search from '../Search/index.vue'
import MegaMenu from '../MegaMenu/index.vue'
import Sidebar from '../Sidebar/index.vue'
import SuccessModal from '../Modal/Samples/Success.vue'
import WarningModal from '../Modal/Samples/Warning.vue'
import DangerModal from '../Modal/Samples/Danger.vue'
import ModalWithForm from '../Modal/Samples/WithForm.vue'
import Table from '../Table/index.vue'
import {Tab, TabsWrapper} from '../Tabs/index.ts'
import Toasts from "../Toasts/index.vue";


export default defineComponent({
  name: 'Main',
  components: {
    Navbar,
    Search,
    MegaMenu,
    Sidebar,
    DangerModal,
    WarningModal,
    SuccessModal,
    ModalWithForm,
    Table,
    TabsWrapper,
    Tab,
    Toasts
  },
  data() {
    return {
      isOpen: false,
      isOpenDangerModal: false,
      isOpenWarningModal: false,
      isOpenSuccessModal: false,
      isOpenModalWithForm: false
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
      this.isOpenModalWithForm = false
    },
    sendMessage(): void {
      const toast = {
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