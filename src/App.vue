<template>
  <head>
    <title>Outlook Pointe RV CampGrounds in Milton, West Virginia</title>
    <meta
      name="description"
      content="Private RV campground in beautiful Milton, West Virginia"
    />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
  </head>
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

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
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
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --accent-hover: #2980b9;
  --text-light: #ecf0f1;
  --text-dark: #2c3e50;
  --spacing-unit: 1rem;
  --transition-speed: 0.3s;

  /* Modern UI Variables */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 15px 30px rgba(0, 0, 0, 0.15);
  --card-bg: #ffffff;
  --card-hover-bg: #f8f9fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

h1, h2, h3 {
  margin-bottom: var(--spacing-unit);
  line-height: 1.2;
  font-weight: 600;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: calc(var(--spacing-unit) * 2);
  letter-spacing: -0.3px;
}

p {
  margin-bottom: var(--spacing-unit);
  line-height: 1.7;
}

section {
  padding: calc(var(--spacing-unit) * 4) 0;
}

/* Modern Card Styles */
.card {
  background: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-speed) ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
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
</style>
