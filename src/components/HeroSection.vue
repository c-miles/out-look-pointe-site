<template>
  <header class="hero">
    <div class="hero-content">
      <h1>Outlook Pointe Campground</h1>
      <p class="tagline">Your Home Away From Home in Milton, West Virginia</p>
      <a href="#contact" class="cta-button">Book Your Stay</a>
    </div>
    <button @click="scrollToFeatures" class="scroll-indicator" aria-label="Scroll to features">
      <ion-icon name="chevron-down-outline"></ion-icon>
    </button>
  </header>
</template>

<script>
export default {
  name: 'HeroSection',
  methods: {
    scrollToFeatures() {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style scoped>
.hero {
  height: 100vh;
  background: linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.8)),
              url('../assets/appalachia.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-light);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  padding: 0 var(--spacing-unit);
  position: relative;
  z-index: 2;
}

h1 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 4rem;
  margin-bottom: var(--spacing-unit);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.5px;
  line-height: 1.1;
  font-weight: 800;
}

.tagline {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: calc(var(--spacing-unit) * 2);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.3px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: var(--accent-color);
  color: var(--text-light);
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-speed);
  box-shadow: var(--shadow-md);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  background-color: var(--accent-hover);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-light);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  opacity: 0.8;
  transition: all var(--transition-speed) ease;
  animation: bounce 2s infinite;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
}

.scroll-indicator:hover {
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}

.scroll-indicator:focus {
  outline: none;
}

.scroll-indicator ion-icon {
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
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

  .scroll-indicator ion-icon {
    font-size: 1.75rem;
    width: 1.75rem;
    height: 1.75rem;
  }
}
</style>