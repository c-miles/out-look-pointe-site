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
      // Settle the destination first. While a section still holds its reveal
      // transform it sits below its final position, and scrollIntoView measures
      // the transformed box, so the target would shift mid-scroll.
      target.classList.add('animate-in')
      // Read at call time so a mid-session preference change is respected. An
      // explicit behavior here overrides CSS scroll-behavior, which is why the
      // reduced-motion stylesheet rule alone was not enough.
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
  /* Everything in here sits on a photograph, which is a fixed-contrast context:
     the backdrop never themes, so neither do headings or focus rings. */
  --heading-color: var(--on-photo);
  --focus-color: var(--on-photo);
  /* Owner decision: the photograph stays essentially unfiltered with the text
     centred over it. This does not meet WCAG AA. The brightest pixel behind the
     text measures roughly 2.2:1 against white where 4.5:1 is required, so this
     text must not be described as accessible. A compliant version was built and
     measured (scrim anchored to the text: 4.73:1 headline, 11.33:1 tagline, sky
     untouched) and was rejected because it moves the text off centre. */
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

/* One short line, so no measure cap: a capped block does not centre itself. It
   is the brand name over bright cloud, so it takes the small step and the semi
   weight rather than the caption defaults. */
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

/* Full white and semi-bold on purpose: thin or dimmed text does not survive an
   unfiltered photograph. */
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

/* Both buttons share one shape. The primary is the only filled orange thing on
   the page; the secondary is an outline so the two never compete. */
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

/* No box-shadow on either button. The elevation tokens are built for cards on
   a page surface and carry a hairline ring, which in dark mode is a solid dark
   line. Around an orange button on a photograph that reads as a black border.
   Over a photo the fill is all the separation a button needs. */
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

/* The primary sits at the brightest orange that still carries white text at
   4.5:1, so hover cannot go lighter. Both buttons signal with lift instead. */
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
  /* Centred by transform, so every other transform on this element must repeat
     translateX(-50%) or it jumps right by half its width. */
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
