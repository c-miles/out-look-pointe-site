import { describe, it, expect, beforeAll } from 'vitest'
import { render } from '../src/entry-server.js'

// What a crawler that doesn't run JavaScript has to be able to read.
describe('pre-rendered page', () => {
  let html

  beforeAll(async () => {
    html = await render()
  })

  it.each([
    ['the headline', 'Monthly RV Lots in Milton, West Virginia'],
    ['the price', '$600-$700'],
    ['the phone number', '(304) 617-4610'],
    ['the hookups', '35-50 amp'],
    ['the biggest rig', '46 ft'],
    ['what is not on site', 'No WiFi'],
    ['the no-deposit term', 'No deposit required'],
    ['the address', '184 Outlook Pointe'],
    ['a guest review', 'Perfect for pipeline workers and traveling nurses.'],
    ['the rating', '4.9'],
  ])('includes %s', (_, text) => {
    expect(html).toContain(text)
  })

  it('has exactly one h1', () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
  })

  it('does not server-render the photo viewer', () => {
    expect(html).not.toContain('role="dialog"')
    expect(html).not.toContain('teleport')
  })
})
