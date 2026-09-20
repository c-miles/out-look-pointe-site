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
        }
      })
    }, {
      threshold: 0.1
    })

    // Observe all sections except the footer
    document.querySelectorAll('section:not(.contact-section)').forEach(section => {
      section.classList.add('scroll-animate')
      if (section.id === 'features' || section.id === 'rates') {
        section.classList.add('slide-right')
      }
      observer.observe(section)
    })
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
  --amber: #A8480B;
  --amber-hover: #8A3A08;
  --surface: #FFFFFF;
  --hairline: #DEDAD2;
  --on-accent: #FFFFFF;

  --font-display: 'Cabinet Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Satoshi', system-ui, -apple-system, sans-serif;

  --r-sm: 4px;
  --r-md: 10px;
  --r-lg: 18px;

  --spacing-unit: 1rem;
  --transition-speed: 0.3s;

  /* Shadows are tinted with the ink hue rather than pure black. */
  --shadow-sm: 0 1px 2px rgba(26, 29, 26, 0.06);
  --shadow-md: 0 4px 12px rgba(26, 29, 26, 0.08);
  --shadow-lg: 0 12px 28px rgba(26, 29, 26, 0.10);
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
    --amber: #E8913C;
    --amber-hover: #F2A455;
    --on-accent: #14170F;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.5);
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
  font-size: clamp(2.2rem, 6vw, 3.9rem);
  font-weight: 700;
}

h2 {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
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
  transform: translateX(-50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.slide-right {
  transform: translateX(50px);
}

.animate-in {
  opacity: 1;
  transform: translateX(0);
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
  .scroll-animate,
  .slide-right,
  .animate-in {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
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
