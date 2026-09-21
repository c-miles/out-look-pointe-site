// Live Google rating as { rating, count, stale }. The API key stays on the
// server, and Netlify caches the answer for a day, so Google gets about one
// call a day. Any failure returns 200 { stale: true } with no numbers, and the
// page keeps its fallback (src/data/rating.js).

const ENDPOINT = 'https://places.googleapis.com/v1/places/'

const DAY = 60 * 60 * 24
const HOUR = 60 * 60

function respond(body, cdnSeconds) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      // Browsers revalidate, but only against Netlify's cache.
      'Cache-Control': 'public, max-age=0, must-revalidate',
      // durable = one cached copy for every edge node, not one per region.
      'Netlify-CDN-Cache-Control': `public, durable, max-age=${cdnSeconds}, stale-while-revalidate=${DAY * 7}`,
    },
  })
}

// Failures cache for an hour: quick to recover, but not retried on every visit.
const stale = () => respond({ stale: true }, HOUR)

export default async function handler() {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!key || !placeId) return stale()

  try {
    const res = await fetch(`${ENDPOINT}${encodeURIComponent(placeId)}`, {
      headers: {
        // Header, not query string, so the key stays out of URL logs.
        'X-Goog-Api-Key': key,
        // The field mask sets the billing tier. More fields (reviews, say) cost
        // more.
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
    })
    if (!res.ok) return stale()

    const data = await res.json()
    const { rating, userRatingCount: count } = data
    if (typeof rating !== 'number' || typeof count !== 'number') return stale()

    return respond({ rating, count, stale: false }, DAY)
  } catch {
    return stale()
  }
}

export const config = { path: '/api/rating' }
