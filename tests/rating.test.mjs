import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import handler from '../netlify/functions/rating.mjs'

const okResponse = (body) => ({ ok: true, json: async () => body })
const read = async (res) => ({ status: res.status, body: await res.json(), headers: res.headers })

beforeEach(() => {
  vi.stubEnv('GOOGLE_PLACES_API_KEY', 'test-key')
  vi.stubEnv('GOOGLE_PLACE_ID', 'test-place')
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('rating function', () => {
  it('returns the rating and count from Google', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(okResponse({ rating: 4.9, userRatingCount: 21 })))
    const { status, body } = await read(await handler())
    expect(status).toBe(200)
    expect(body).toEqual({ rating: 4.9, count: 21, stale: false })
  })

  it('sends the key in a header, never in the URL', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse({ rating: 4.9, userRatingCount: 21 }))
    vi.stubGlobal('fetch', fetchMock)
    await handler()
    const [url, options] = fetchMock.mock.calls[0]
    expect(url).not.toContain('test-key')
    expect(options.headers['X-Goog-Api-Key']).toBe('test-key')
  })

  it('asks for only the two fields, because the field mask sets the billing tier', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse({ rating: 4.9, userRatingCount: 21 }))
    vi.stubGlobal('fetch', fetchMock)
    await handler()
    expect(fetchMock.mock.calls[0][1].headers['X-Goog-FieldMask']).toBe('rating,userRatingCount')
  })

  it('caches a good answer for a day, shared across edge nodes', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(okResponse({ rating: 4.8, userRatingCount: 22 })))
    const { headers } = await read(await handler())
    const cdn = headers.get('Netlify-CDN-Cache-Control')
    expect(cdn).toContain('durable')
    expect(cdn).toContain('max-age=86400')
    expect(cdn).toContain('stale-while-revalidate')
  })

  describe('failure never reaches the visitor', () => {
    const cases = {
      'Google answers with an error (an exhausted daily quota is a 429)': () =>
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 429 })),
      'the network call throws': () =>
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down'))),
      'the API key is missing': () => vi.stubEnv('GOOGLE_PLACES_API_KEY', ''),
      'the place id is missing': () => vi.stubEnv('GOOGLE_PLACE_ID', ''),
      'Google answers 200 with an unexpected shape': () =>
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(okResponse({ rating: 'n/a' }))),
    }

    for (const [name, arrange] of Object.entries(cases)) {
      it(`answers 200 with { stale: true } when ${name}`, async () => {
        arrange()
        const { status, body } = await read(await handler())
        expect(status).toBe(200)
        expect(body).toEqual({ stale: true })
      })
    }

    it('caches a failure for an hour, not a day, so recovery is quick', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }))
      const { headers } = await read(await handler())
      expect(headers.get('Netlify-CDN-Cache-Control')).toContain('max-age=3600')
    })

    it('does not call Google at all without a key', async () => {
      const fetchMock = vi.fn()
      vi.stubGlobal('fetch', fetchMock)
      vi.stubEnv('GOOGLE_PLACES_API_KEY', '')
      await handler()
      expect(fetchMock).not.toHaveBeenCalled()
    })
  })
})
