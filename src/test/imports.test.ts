import { describe, expect, test } from 'vitest'

describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('@/components/DetailItem.vue')
    expect(cmp).toBeDefined()
  })

  test('dynamic imports as expected', async () => {
    const name = 'DetailItem'
    const cmp = await import(`@/components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})
