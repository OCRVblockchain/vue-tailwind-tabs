<template>
  <main class="min-h-screen bg-white">
    <section class="w-full flex flex-col p-5">

      <TabsWrapper>
        <Tab title="Orders" :isActive="activeTab === 'orders'" @click="clickTab('orders')">
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
        <Tab title="Active" :isActive="activeTab === 'active'" @click="clickTab('active')">
          <template v-slot:icon>
            <svg :class="{'text-indigo-700': activeTab === 'active'}"
                 class="font-medium text-gray-400 w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </template>
        </Tab>
        <Tab title="To invoice" :isActive="activeTab === 'toInvoice'" @click="clickTab('toInvoice')">
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
          Ad alias animi at consequuntur cumque delectus, dolor doloribus illum in, odit porro quasi quo reprehenderit
          saepe suscipit tempora totam ullam unde veritatis
          voluptates. At, cumque cupiditate dolores fuga illum iure laboriosam minus neque nihil nobis numquam odit,
          perferendis quia repellendus suscipit ut veniam. Earum libero neque quia similique voluptates. Aspernatur
          earum maxime quae quisquam repellat sunt vel voluptatum? Autem deleniti, dolore, dolorum est facere harum hic
          inventore ipsum molestias nisi qui ratione recusandae rem repellendus sequi tempore vitae? Ab deleniti, eos
          expedita facere illo ipsa nobis, perspiciatis repellat repudiandae tempora, velit.
        </div>
        <div v-if="activeTab === 'active'">
          Aspernatur cupiditate, dolorum earum eius ex facilis
          illum maiores nihil optio placeat, quam quos repellendus suscipit tempora, voluptate! Alias asperiores
          assumenda beatae commodi dolorum, laudantium libero molestiae nam officiis praesentium quisquam soluta totam,
          veritatis. A, adipisci error ex illum iusto unde. A animi assumenda at, dolorem ducimus enim error incidunt,
          ipsam iure magnam nobis omnis quae quasi quod recusandae, reiciendis rerum sequi. Alias animi consequuntur
          delectus distinctio enim, et expedita ipsam itaque labore neque nobis numquam obcaecati, officia perferendis
          possimus provident quaerat qui, quibusdam quis quos ratione recusandae repellat reprehenderit sit voluptate!
        </div>
        <div v-if="activeTab === 'toInvoice'">
          Deserunt ducimus explicabo facere ipsam,
          necessitatibus quod sit voluptatem! Ad adipisci aut autem, cum debitis eum exercitationem illum in ipsam
          itaque necessitatibus nostrum pariatur quaerat quidem ratione, similique vel velit, voluptate voluptates
          voluptatibus. Animi aperiam assumenda atque autem, cupiditate deserunt dignissimos doloribus eveniet, nemo
          quae quod sunt voluptatibus? Ab aliquam aut commodi cupiditate deleniti deserunt et excepturi laudantium
          molestias nam natus officiis perspiciatis, reiciendis, repellat soluta! Dignissimos eaque fugiat minus odit
          qui quo, quos recusandae. Beatae culpa dolores ea enim eos explicabo ipsum, laudantium molestias natus
          obcaecati officia quia temporibus totam voluptas.
        </div>
      </TabsContent>

    </section>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {Tab, TabsContent, TabsWrapper} from './VueTailwindTabs/index.ts'

type Tab = string

interface Data {
  activeTab: Tab
}

export default defineComponent({
  name: 'Tailwind Tabs Example',
  components: {
    TabsWrapper,
    Tab,
    TabsContent
  },
  data(): Data {
    return {
      activeTab: 'orders'
    }
  },
  methods: {
    clickTab(name: Tab): void {
      this.activeTab = name
    }
  }
})
</script>

<style scoped>
</style>