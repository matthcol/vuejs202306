import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheMovie from '../TheMovie.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(TheMovie, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
