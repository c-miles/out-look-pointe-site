// Fades sections in once as they scroll into view. The hidden class is added by
// script, so no script means a visible page. The timeout reveals everything if
// the observer never fires. Returns a teardown.
export function startScrollReveal(elements, { fallbackMs = 3000 } = {}) {
  const targets = [...elements]

  const reveal = (el) => {
    el.classList.add('animate-in')
    observer.unobserve(el)
  }

  // Bottom root margin, not a threshold: a threshold misfires on tall sections.
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
