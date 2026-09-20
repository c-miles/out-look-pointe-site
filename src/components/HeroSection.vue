<template>
  <header class="hero">
    <div class="hero-content">
      <h1>Outlook Pointe Campground</h1>
      <p class="tagline">Your Home Away From Home in Milton, West Virginia</p>
      <button @click="scrollToContact" class="cta-button">Contact Us to Book</button>
    </div>
    <button @click="scrollToFeatures" class="scroll-indicator" aria-label="Scroll to features">
      <IconChevronDown :size="30" />
    </button>
  </header>
</template>

<script>
import IconChevronDown from './icons/IconChevronDown.vue'

export default {
  name: 'HeroSection',
  components: { IconChevronDown },
  methods: {
    // Read the preference at call time, not at mount, so a mid-session change
    // is respected. An explicit behavior here overrides CSS scroll-behavior,
    // which is why the reduced-motion rule alone was not enough.
    scrollBehavior() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth';
    },
    scrollToSection(id) {
      const target = document.getElementById(id);
      if (!target) return;
      // Settle the destination first. While a section still holds its reveal
      // transform it sits below its final position, and scrollIntoView measures
      // the transformed box, so the target would shift mid-scroll.
      target.classList.add('animate-in');
      target.scrollIntoView({
        behavior: this.scrollBehavior(),
        block: 'start'
      });
    },
    scrollToFeatures() {
      this.scrollToSection('features');
    },
    scrollToContact() {
      this.scrollToSection('contact');
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  min-height: 100dvh;
  /* Owner decision: the photograph stays essentially unfiltered and the text is
     centred over it. This does not meet WCAG AA. The brightest pixel behind the
     text measures roughly 2.2:1 against white where 4.5:1 is required, so this
     text must not be described as accessible. The grade below is 0.10, low
     enough to read as a light colour grade rather than a filter, and each glyph
     carries its own halo via text-shadow.
     A compliant version exists and was measured: anchoring the scrim to the
     text instead of spreading it across the frame reaches 4.73:1 on the
     headline and 11.33:1 on the tagline while leaving the sky completely
     untouched. It was not chosen because it moves the text off centre. */
  background:
    var(--hero-grade),
    image-set(url('../assets/appalachian-mountains-wv.webp') type('image/webp'),
              url('../assets/appalachian-mountains-wv.jpg') type('image/jpeg'))
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--on-photo);
  position: relative;
}

.hero-content {
  max-width: var(--container);
  padding: 0 var(--gutter);
  position: relative;
  z-index: var(--z-raised);
}

h1 {
  color: var(--on-photo);
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  font-weight: var(--fw-display);
  font-stretch: var(--width-display);
  margin-bottom: var(--space-s);
  text-shadow: var(--text-halo-display);
}

.tagline {
  /* Full white and bold on purpose. It was once rgba(255,255,255,0.92) plus
     opacity 0.9, compounding to 83% white with the element opacity weakening
     its own shadow, and thin dimmed text does not survive an unfiltered photo. */
  color: var(--on-photo);
  font-size: var(--fs-lede);
  line-height: var(--lh-lede);
  letter-spacing: var(--ls-lede);
  font-weight: var(--fw-semi);
  text-shadow: var(--text-halo-body);
  text-wrap: balance;
  max-width: var(--measure-tagline);
  margin: 0 auto var(--space-l);
}

.cta-button {
  display: inline-block;
  padding: var(--space-xs) var(--space-l);
  background-color: var(--amber);
  color: var(--on-accent);
  text-decoration: none;
  border: none;
  border-radius: var(--r-control);
  font-size: var(--fs-small);
  font-weight: var(--fw-semi);
  letter-spacing: var(--ls-button);
  text-transform: uppercase;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: background-color var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out),
              box-shadow var(--dur-2) var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .cta-button:hover {
    /* The base sits at the brightest orange that still carries white text at
       4.5:1, so hover cannot go lighter. It signals with lift and elevation
       instead, and settles a touch deeper. */
    background-color: var(--amber-hover);
    transform: translateY(calc(var(--lift-control) * -1));
    box-shadow: var(--elev-lifted);
  }

  .scroll-indicator:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(var(--lift-control));
  }
}

.cta-button:active {
  transform: translateY(0) scale(var(--press-control));
  transition-duration: var(--dur-1);
}

.scroll-indicator:active {
  /* Must repeat translateX(-50%): the element is centred by transform, so a
     bare translateY here replaces the centering and the chevron jumps right. */
  transform: translateX(-50%) translateY(var(--lift-card));
  transition-duration: var(--dur-1);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-l);
  left: 50%;
  transform: translateX(-50%);
  width: var(--control-lg);
  height: var(--control-lg);
  padding: var(--space-2xs);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--on-photo);
  background: none;
  border: none;
  cursor: pointer;
  z-index: var(--z-raised);
  opacity: var(--opacity-muted);
  transition: opacity var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out);
}

.scroll-indicator:focus {
  outline: none;
}

.scroll-indicator svg {
  width: var(--icon-lg);
  height: var(--icon-lg);
}


/* No font sizes here. The type scale is fluid, and the two media queries that
   used to live below re-set h1 and the tagline at 768px and 480px, which fought
   it. Only the control still steps down on a phone. */
@media only screen and (max-width: 480px) {
  .scroll-indicator {
    bottom: var(--space-m);
    width: var(--control-md);
    height: var(--control-md);
  }

  .scroll-indicator svg {
    width: var(--icon-md);
    height: var(--icon-md);
  }
}
</style>