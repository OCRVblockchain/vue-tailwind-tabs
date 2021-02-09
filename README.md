# Vue Tailwind Tabs

Vue component for creating tabs using [Tailwind CSS](https://tailwindcss.com).

## Install

```
npm install --save @ocrv/vue-tailwind-tabs
```

## Usage

Import the components

```js
import {TabsWrapper, TabsContent, Tab} from '@ocrv/vue-tailwind-tabs'
```

Define data for ```activeTab``` and ```clickTab``` callback method

```js
export default {
    components: {
        TabsWrapper,
        TabsContent,
        Tab
    },
    data() {
        return {
            activeTab: 'tab1'
        }
    },
    methods: {
        clickTab(name) {
            this.activeTab = name
        }
    }
}
```

Next, in your HTML code:

```html
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
```