# Vue Tailwind Tabs

![build](https://github.com/OCRVblockchain/vue-tailwind-tabs/workflows/build/badge.svg)
![downloads-week](https://img.shields.io/npm/dw/@ocrv/vue-tailwind-tabs)
![downloads](https://img.shields.io/npm/dt/@ocrv/vue-tailwind-tabs)

Vue component for creating tabs using [Tailwind CSS](https://tailwindcss.com).

<img width="992" alt="Снимок экрана 2021-02-17 в 11 31 05" src="https://user-images.githubusercontent.com/18230071/108176985-b2063280-7113-11eb-95d2-2b4c544175a1.png">

## Install

```
npm install --save @ocrv/vue-tailwind-tabs
```

## Usage

1. Import library styles

```js
import '@ocrv/vue-tailwind-tabs/styles'
```

2. Import the components

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

More examples [here](https://github.com/OCRVblockchain/vue-tailwind-tabs/blob/main/src/components/Example.vue)
