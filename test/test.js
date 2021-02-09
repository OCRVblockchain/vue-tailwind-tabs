import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'
//import { Tab, TabsContent, TabsWrapper } from '@/components/VueTailwindTabs/index'

import TabsWrapper from '../src/components/VueTailwindTabs/TabsWrapper.vue'
import Tab from '../src/components/VueTailwindTabs/Tab.vue'
import TabsContent from '../src/components/VueTailwindTabs/TabsContent.vue'

var assert = require('assert');

describe('vue-tailwind-tabs', () => {

    let template = `
        <TabsWrapper>
            <Tab title="Tab 1" :isActive="activeTab === 'tab1'" @click="clickTab('tab1')" />
            <Tab title="Tab 2" :isActive="activeTab === 'tab2'" @click="clickTab('tab2')" />
            <Tab title="Tab 3" :isActive="activeTab === 'tab3'" @click="clickTab('tab3')" />
        </TabsWrapper>
        <TabsContent>
            <div v-if="activeTab === 'tab1'">
                Ad alias animi at consequuntur cumque delectus, dolor doloribus illum in, odit porro quasi.
            </div>
            <div v-if="activeTab === 'tab2'">
                Aspernatur cupiditate, dolorum earum eius ex facilis!
            </div>
            <div v-if="activeTab === 'tab3'">
                Deserunt ducimus explicabo facere ipsam.
            </div>
        </TabsContent>
    `

    let component = defineComponent({
        template: template,
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
            clickTab(name) {
                this.activeTab = name
            }
        }
    })

    it('displays default message', () => {
        const wrapper = shallowMount(component)
        //assert(wrapper.text()).toContain('default message')
    })

})
