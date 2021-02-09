import { shallowMount } from '@vue/test-utils'
import { Tab } from '../../src/components/VueTailwindTabs/index.ts'

var assert = require('assert');

describe('vue-tailwind-tabs', () => {

    it('display title', () => {
        const wrapper = shallowMount(Tab, {
            props: {
                title: 'Tab 1'
            }
        })

        const text = wrapper.find('span')

        assert.strictEqual(text.text(), 'Tab 1')
    })

    it('handle click', async () => {
        let clicked = false
        const tabClick = () => {
            clicked = true
        }

        const wrapper = shallowMount(Tab, {
            props: {
                title: 'Tab 1',
                click: tabClick
            }
        })

        const tab = wrapper.find('li')
        await tab.trigger('click')

        assert.strictEqual(clicked, true)
    })
})
