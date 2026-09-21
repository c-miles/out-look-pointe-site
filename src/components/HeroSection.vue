<template>
  <header class="hero">
    <div class="hero-content">
      <p class="eyebrow hero-eyebrow">{{ site.name }}</p>
      <h1>Monthly RV Lots in Milton, West Virginia</h1>
      <p class="tagline type-lede">
        Quiet, private lots with full hookups and every utility included.
        Three tenths of a mile from town.
      </p>
      <div class="hero-actions">
        <button type="button" class="cta cta--primary" @click="scrollTo('contact')">Check availability</button>
        <a class="cta cta--secondary" :href="site.phone.href">
          Call <span class="nowrap">{{ site.phone.display }}</span>
        </a>
      </div>
    </div>
    <button type="button" class="scroll-indicator" aria-label="Scroll to campground details" @click="scrollTo('at-a-glance')">
      <AppIcon name="chevron-down" />
    </button>
  </header>
</template>

<script>
import AppIcon from './AppIcon.vue'
import { site } from '../data/site'

export default {
  name: 'HeroSection',
  components: { AppIcon },
  data() {
    return { site }
  },
  methods: {
    scrollTo(id) {
      const target = document.getElementById(id)
      if (!target) return
      // Reveal the target first, or its leftover transform shifts it while the
      // page scrolls.
      target.classList.add('animate-in')
      // An explicit behavior overrides CSS scroll-behavior, so reduced motion
      // has to be checked here.
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--on-photo);
  /* Always on a photo, so these never theme. */
  --heading-color: var(--on-photo);
  --focus-color: var(--on-photo);
  /* Owner's call: no scrim, text centred. This fails WCAG AA (about 2.2:1 at
     the brightest spot), so don't describe it as accessible. */
  background:
    var(--hero-grade),
    image-set(url('../assets/appalachian-mountains-wv.webp') type('image/webp'),
              url('../assets/appalachian-mountains-wv.jpg') type('image/jpeg'))
    center/cover;
}

.hero-content {
  position: relative;
  z-index: var(--z-raised);
  max-width: var(--container);
  padding-inline: var(--gutter);
}

/* No max-width: a capped block doesn't centre itself. */
.hero-eyebrow {
  max-width: none;
  font-size: var(--fs-small);
  font-weight: var(--fw-semi);
  text-shadow: var(--text-halo-body);
}

h1 {
  max-width: var(--measure-hero);
  margin: 0 auto var(--space-s);
  text-shadow: var(--text-halo-display);
}

/* Full white and semi-bold so it survives the unfiltered photo. */
.tagline {
  max-width: var(--measure-tagline);
  margin: 0 auto var(--space-l);
  font-weight: var(--fw-semi);
  text-shadow: var(--text-halo-body);
  text-wrap: balance;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
}

.cta {
  display: inline-block;
  padding: var(--space-xs) var(--space-l);
  border: var(--border-hair) solid var(--cta-edge);
  border-radius: var(--r-control);
  background-color: var(--cta-fill);
  color: var(--cta-text);
  font-family: var(--font-body);
  font-size: var(--fs-small);
  font-weight: var(--fw-semi);
  letter-spacing: var(--ls-button);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background-color var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out);
}

/* No box-shadow: the elevation tokens carry a ring that shows as a dark
   border over a photo. */
.cta--primary {
  --cta-fill: var(--amber);
  --cta-fill-hover: var(--amber-hover);
  --cta-edge: var(--amber);
  --cta-text: var(--on-accent);
}

.cta--secondary {
  --cta-fill: var(--overlay-control-bg);
  --cta-fill-hover: var(--overlay-control-bg-hover);
  --cta-edge: var(--on-photo);
  --cta-text: var(--on-photo);
}

/* --amber is the lightest orange that passes with white text, so hover goes
   darker. */
@media (hover: hover) and (pointer: fine) {
  .cta:hover {
    background-color: var(--cta-fill-hover);
    transform: translateY(calc(var(--lift-control) * -1));
  }

  .scroll-indicator:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(var(--lift-control));
  }
}

.cta:active {
  transform: scale(var(--press-control));
  transition-duration: var(--dur-1);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-l);
  left: 50%;
  /* Centred by transform, so every other transform here must repeat
     translateX(-50%). */
  transform: translateX(-50%);
  z-index: var(--z-raised);
  display: grid;
  place-items: center;
  width: var(--control-lg);
  height: var(--control-lg);
  padding: 0;
  border: none;
  background: none;
  color: var(--on-photo);
  opacity: var(--opacity-muted);
  cursor: pointer;
  transition: opacity var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out);
}

.scroll-indicator:active {
  transform: translateX(-50%) translateY(var(--lift-card));
  transition-duration: var(--dur-1);
}

.scroll-indicator .app-icon {
  width: var(--icon-lg);
  height: var(--icon-lg);
}
</style>
