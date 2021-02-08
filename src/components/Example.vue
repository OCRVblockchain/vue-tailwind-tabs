<template>
  <main class="min-h-screen bg-blue-50">
    <section class="w-full flex flex-col p-5">

      <TabsWrapper>
        <Tab title="Все заявки" :isActive="activeTab === 'orders'" @click="clickTab('orders')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'orders'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </template>
        </Tab>
        <Tab title="Активные" :isActive="activeTab === 'active'" @click="clickTab('active')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'active'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </template>
        </Tab>
        <Tab title="К оплате" :isActive="activeTab === 'toInvoice'" @click="clickTab('toInvoice')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'toInvoice'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </template>
        </Tab>
      </TabsWrapper>

      <TabsContent>
          <div v-if="activeTab === 'orders'">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, facere hic in inventore laudantium
            omnis perferendis temporibus totam? Adipisci aliquam dolore doloribus dolorum eaque necessitatibus obcaecati
            voluptate? Odit, placeat, quos!
          </div>
          <div v-if="activeTab === 'active'">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda, blanditiis consectetur cum dolor
            hic impedit in laboriosam libero obcaecati praesentium quia repellat sed similique sit soluta vel veritatis
            vitae!
          </div>
          <div v-if="activeTab === 'toInvoice'">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet beatae cupiditate dolore
            doloremque enim, eveniet expedita hic illo laborum maiores nesciunt obcaecati quae similique tempora, vitae
            voluptatem voluptates.
          </div>
      </TabsContent>

    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {TabsWrapper, Tab, TabsContent} from './VueTailwindTabs/index.ts'

export default defineComponent({
  name: 'Tailwind Tabs Example',
  components: {
    TabsWrapper,
    Tab,
    TabsContent
  },
  data() {
    return {
      activeTab: 'orders'
    }
  },
  methods: {
    clickTab(n) {
      this.activeTab = n
    }
  }
})
</script>

<style scoped>
</style>