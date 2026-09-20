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
    linear-gradient(180deg,
      rgba(12, 14, 12, 0.10) 0%,
      rgba(12, 14, 12, 0.10) 72%,
      rgba(12, 14, 12, 0.20) 100%),
    image-set(url('../assets/appalachian-mountains-wv.webp') type('image/webp'),
              url('../assets/appalachian-mountains-wv.jpg') type('image/jpeg'))
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  position: relative;
}

.hero-content {
  max-width: 800px;
  padding: 0 var(--spacing-unit);
  position: relative;
  z-index: 2;
}

h1 {
  color: #FFFFFF;
  font-size: 4rem;
  margin-bottom: var(--spacing-unit);
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.70),
    0 2px 10px rgba(0, 0, 0, 0.55),
    0 6px 28px rgba(0, 0, 0, 0.45);
  letter-spacing: -0.028em;
  line-height: 1.1;
  font-weight: 800;
}

.tagline {
  /* Was rgba(255,255,255,0.92) AND opacity 0.9, compounding to 83% white,
     with the element opacity also weakening its own shadow. Over an
     unfiltered photograph, thin dimmed text does not survive. Full white,
     heavier strokes, and a tighter halo do. */
  color: #FFFFFF;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: calc(var(--spacing-unit) * 2);
  text-shadow:
    0 1px 1px rgba(0, 0, 0, 0.90),
    0 1px 4px rgba(0, 0, 0, 0.80),
    0 2px 10px rgba(0, 0, 0, 0.65),
    0 4px 24px rgba(0, 0, 0, 0.50);
  letter-spacing: -0.005em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: var(--amber);
  color: var(--on-accent);
  text-decoration: none;
  border-radius: var(--r-lg);
  font-weight: 600;
  font-size: 1rem;
  transition: background-color var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out),
              box-shadow var(--dur-2) var(--ease-out);
  box-shadow: var(--shadow-md);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-feature-settings: 'case' 1;
  border: none;
  cursor: pointer;
}

@media (hover: hover) and (pointer: fine) {
  .cta-button:hover {
    background-color: var(--amber-hover);
    transform: translateY(-1px);
  }

  .scroll-indicator:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(2px);
  }
}

.cta-button:active {
  transform: translateY(0) scale(0.985);
  transition-duration: var(--dur-1);
}

.scroll-indicator:active {
  /* Must repeat translateX(-50%): the element is centred by transform, so a
     bare translateY here replaces the centering and the chevron jumps right. */
  transform: translateX(-50%) translateY(3px);
  transition-duration: var(--dur-1);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  transition: opacity var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
}

.scroll-indicator:focus {
  outline: none;
}

.scroll-indicator svg {
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
}


@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2.75rem;
  }

  .tagline {
    font-size: 1.125rem;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 2.25rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .scroll-indicator {
    bottom: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .scroll-indicator svg {
    font-size: 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
  }
}
</style>