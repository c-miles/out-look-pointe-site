// Fades sections in as they scroll into view, once each.
//
// The hidden state is applied here, by script, so if the script never runs the
// page is simply visible. The timeout covers the other failure: the script runs
// but the observer never fires, which would otherwise leave content at opacity 0
// with no way back. By the time it fires, a working observer has already
// revealed everything and it is a no-op.
//
// Returns a function that stops observing and cancels the timeout.
export function startScrollReveal(elements, { fallbackMs = 3000 } = {}) {
  const targets = [...elements]

  const reveal = (el) => {
    el.classList.add('animate-in')
    observer.unobserve(el)
  }

  // A threshold on a tall section fires when almost nothing is visible. A bottom
  // root margin is independent of element height.
  const observer = new IntersectionObserver(
    (entries) => entries.filter((e) => e.isIntersecting).forEach((e) => reveal(e.target)),
    { threshold: 0, rootMargin: '0px 0px -12% 0px' }
  )

  targets.forEach((el) => {
    el.classList.add('scroll-animate')
    observer.observe(el)
  })

  const fallback = window.setTimeout(() => targets.forEach(reveal), fallbackMs)

  return () => {
    window.clearTimeout(fallback)
    observer.disconnect()
  }
}
