import { reactive } from 'vue'

// The Google rating, shared by whatever shows it. These are the fallback
// numbers and the only copy of them. Bump them by hand now and then.
export const rating = reactive({
  value: 4.9,
  count: 21,
})

let requested = false

// Refresh from our own function, once per page load. On any failure the
// fallback stays. (The function doesn't exist on the dev server.)
export async function refreshRating() {
  if (requested) return
  requested = true
  try {
    const res = await fetch('/api/rating')
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) return
    const data = await res.json()
    if (data.stale) return
    if (typeof data.rating === 'number' && typeof data.count === 'number') {
      rating.value = data.rating
      rating.count = data.count
    }
  } catch {
    // keep the fallback
  }
}
