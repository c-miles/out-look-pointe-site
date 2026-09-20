<template>
  <div id="app">
    <HeroSection />
    <FeaturesSection />
    <GallerySection />
    <RatesSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import GallerySection from './components/GallerySection.vue'
import RatesSection from './components/RatesSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    FeaturesSection,
    GallerySection,
    RatesSection,
    ContactSection
  },
  mounted() {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, {
      // A threshold on a tall section fires when almost nothing is visible.
      // A bottom root margin is independent of element height.
      threshold: 0,
      rootMargin: '0px 0px -12% 0px'
    })

    // Observe all sections except the footer
    const animated = [...document.querySelectorAll('section:not(.contact-section)')]
    animated.forEach(section => {
      section.classList.add('scroll-animate')
      observer.observe(section)
    })

    // Safety net. The hidden state is applied by JS, so a script failure leaves
    // the page visible. But if the script runs and the observer then never
    // fires, the content would stay at opacity 0 with no way back. Reveal
    // everything unconditionally after a short delay; by then a working
    // observer has already done its job and this is a no-op.
    this.revealFallback = window.setTimeout(() => {
      animated.forEach(section => {
        section.classList.add('animate-in')
        observer.unobserve(section)
      })
    }, 3000)
  },
  beforeUnmount() {
    window.clearTimeout(this.revealFallback)
  }
}
</script>

<style>
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/fonts/CabinetGrotesk-400.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Cabinet Grotesk';
  src: url('/fonts/CabinetGrotesk-700.woff2') format('woff2');
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-400.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-700.woff2') format('woff2');
  font-weight: 700; font-style: normal; font-display: swap;
}

/* Palette sampled from the campground photographs: tree canopy, the gravel
   access road, and sky haze. The amber is wayfinding, used for calls to
   action and nothing else. */
:root {
  --forest: #1E3A2B;
  --forest-deep: #142619;
  --bone: #F6F5F2;
  --gravel: #6F6859;
  --ink: #1A1D1A;
  --amber: #C2410C;
  --amber-hover: #CB450D;
  --surface: #FFFFFF;
  --hairline: #DEDAD2;
  --on-accent: #FFFFFF;

  /* A deep panel reads as a panel in both schemes, so it does not invert the
     way --forest does. --forest is a text colour; this is a background. */
  --panel: #1E3A2B;
  --panel-hairline: #33543F;
  --on-panel: #F6F5F2;
  --on-panel-muted: #C4D2C7;

  --font-display: 'Cabinet Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Satoshi', system-ui, -apple-system, sans-serif;

  --r-sm: 4px;
  --r-md: 10px;
  --r-lg: 18px;

  --spacing-unit: 1rem;

  /* Entrances decelerate, exits accelerate. Using one curve for both is the
     single most common motion mistake in templates. */
  --ease-out:      cubic-bezier(0.33, 1, 0.68, 1);
  --ease-out-snap: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:       cubic-bezier(0.32, 0, 0.67, 0);

  --dur-1: 120ms;  /* colour, border, opacity on small controls */
  --dur-2: 180ms;  /* hover lift, icon state */
  --dur-3: 260ms;  /* overlay fade, image scale */
  --dur-4: 420ms;  /* section scroll reveal */

  --reveal-distance: 16px;

  --transition-speed: var(--dur-2);

  /* Shadows are tinted with the ink hue rather than pure black. */
  --card-border: 1px solid var(--hairline);
  --shade: 152deg 24% 10%;

  --elev-rest:
    0 0 0 1px hsl(var(--shade) / 0.08);
  --elev-raised:
    0 0 0 1px hsl(var(--shade) / 0.07),
    0 1px 2px -1px hsl(var(--shade) / 0.10),
    0 3px 6px -3px hsl(var(--shade) / 0.08);
  --elev-lifted:
    0 0 0 1px hsl(var(--shade) / 0.08),
    0 2px 4px -2px hsl(var(--shade) / 0.10),
    0 8px 16px -6px hsl(var(--shade) / 0.10);
  --elev-overlay:
    0 0 0 1px hsl(var(--shade) / 0.10),
    0 4px 8px -4px hsl(var(--shade) / 0.10),
    0 20px 40px -12px hsl(var(--shade) / 0.18);

  --shadow-sm: var(--elev-rest);
  --shadow-md: var(--elev-raised);
  --shadow-lg: var(--elev-lifted);
}

@media (prefers-color-scheme: dark) {
  :root {
    --forest: #8FB89B;
    --forest-deep: #0E1811;
    --bone: #14170F;
    --surface: #1B1F19;
    --ink: #EDEAE2;
    --gravel: #A39B8B;
    --hairline: #2E332B;
    --amber: #C2410C;
    --amber-hover: #D04710;
    --on-accent: #FFFFFF;

    --panel: #1B2C21;
    --panel-hairline: #2F4638;
    --on-panel: #E8EDE6;
    --on-panel-muted: #A8BCAE;

    --surface-hover: #232820;
    --hairline-raised: #3B4239;

    --elev-rest:
      0 0 0 1px var(--hairline);
    --elev-raised:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.05),
      0 0 0 1px var(--hairline),
      0 2px 6px -2px hsl(0deg 0% 0% / 0.40);
    --elev-lifted:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.07),
      0 0 0 1px var(--hairline-raised),
      0 6px 16px -4px hsl(0deg 0% 0% / 0.50);
    --elev-overlay:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.08),
      0 0 0 1px var(--hairline-raised),
      0 16px 40px -8px hsl(0deg 0% 0% / 0.65);

    --shadow-sm: var(--elev-rest);
    --shadow-md: var(--elev-raised);
    --shadow-lg: var(--elev-lifted);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--ink);
  background-color: var(--bone);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

h1, h2, h3 {
  margin-bottom: var(--spacing-unit);
  line-height: 1.15;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--forest);
  letter-spacing: -0.015em;
}

h1 {
  font-size: clamp(2.3rem, 1.702rem + 2.552vw, 4.2rem);
  font-weight: 700;
}

h2 {
  font-size: clamp(1.75rem, 1.396rem + 1.510vw, 2.6rem);
  font-weight: 700;
  margin-bottom: calc(var(--spacing-unit) * 2);
}

p {
  margin-bottom: var(--spacing-unit);
  line-height: 1.7;
  font-size: 1.125rem;
}

section {
  padding: calc(var(--spacing-unit) * 4) 0;
}

/* Scroll Animation Styles */
.scroll-animate {
  opacity: 0;
  transform: translateY(var(--reveal-distance));
  transition: opacity var(--dur-4) var(--ease-out),
              transform var(--dur-4) var(--ease-out);
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  section {
    padding: calc(var(--spacing-unit) * 3) 0;
  }
}

/* The scroll reveal ran unconditionally. Anyone who has asked their OS to
   reduce motion was getting it anyway. */
@media (prefers-reduced-motion: reduce) {
  :root {
    --reveal-distance: 0px;
    --dur-4: 80ms;
  }

  .scroll-animate,
  .animate-in {
    opacity: 1 !important;
    transform: none !important;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
