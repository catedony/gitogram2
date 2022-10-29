import { mount } from '@vue/test-utils'
import Issues from '@/components/Issues.vue'

describe('component Issues', () => {
  it('изменяет надпись при клике на тогглер', async () => {
    const wrapper = mount(Issues)
    expect(wrapper.find('.toggler-text').text()).toBe('View issues')
    await wrapper.find('.toggler').trigger('click')
    expect(wrapper.find('.toggler-text').text()).toBe('Hide issues')
  })

  it('выполняет эмит события loadIssues', async () => {
    const wrapper = mount(Issues)
    await wrapper.find('.toggler').trigger('click')
    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })
  it('отрисует список элементов', async () => {
    const issue = {
      id: '1',
      user: {
        login: 'user name'
      },
      body_html: 'Hello world'
    }
    const wrapper = mount(Issues,
      {
        propsData: {
          issues: Array.from({ length: 6 }).map(x => issue)
        }
      })
    expect(wrapper.find('.issue').exists()).toBe(false)
    await wrapper.find('.toggler').trigger('click')
    expect(wrapper.findAll('.issue').length).toBe(6)
  })
  it('не выполняет эмит события loadIssues, если уже есть список issues', async () => {
    const issue = {
      id: '1',
      user: {
        login: 'user name'
      },
      body_html: 'Hello world'
    }
    const wrapper = mount(Issues,
      {
        propsData: {
          issues: Array.from({ length: 6 }).map(x => issue)
        }
      })
    await wrapper.find('.toggler').trigger('click')
    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
})
