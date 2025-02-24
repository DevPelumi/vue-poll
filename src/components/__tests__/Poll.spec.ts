import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Poll from '../Poll.vue'

describe('Poll.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Poll)
  })

  it('increments votes when clicking an option', async () => {
    const firstOption = wrapper.findAll('.option')[0]
    await firstOption.trigger('click')

    expect(wrapper.find('.total-votes').text()).toBe('1 votes')
    expect(firstOption.find('.option-percentage').text()).toBe('100%')
  })

  it('calculates percentages correctly with multiple votes', async () => {
    const options = wrapper.findAll('.option')

    // Vote twice for first option and once for second option
    await options[0].trigger('click')
    await options[0].trigger('click')
    await options[1].trigger('click')

    expect(wrapper.find('.total-votes').text()).toBe('3 votes')
    expect(options[0].find('.option-percentage').text()).toBe('67%')
    expect(options[1].find('.option-percentage').text()).toBe('33%')
  })

  it('resets the poll when clicking reset button', async () => {
    // First vote on some options
    const options = wrapper.findAll('.option')
    await options[0].trigger('click')
    await options[1].trigger('click')

    // Then reset
    await wrapper.find('.reset-button').trigger('click')

    // Check if everything is reset
    expect(wrapper.find('.total-votes').text()).toBe('0 votes')
    expect(options[0].find('.option-percentage').text()).toBe('0%')
    expect(options[1].find('.option-percentage').text()).toBe('0%')
  })
})
