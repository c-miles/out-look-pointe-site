<template>
  <header class="hero">
    <div class="hero-content">
      <h1>Outlook Pointe Campground</h1>
      <p class="tagline">Your Home Away From Home in Milton, West Virginia</p>
      <a href="#contact" class="cta-button">Book Your Stay</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  height: 100vh;
  background: linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.7)),
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  padding: 0 var(--spacing-unit);
  position: relative;
  z-index: 2;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  margin-bottom: var(--spacing-unit);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
}

.tagline {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: calc(var(--spacing-unit) * 2);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: var(--accent-color);
  color: var(--text-light);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.2rem;
  transition: all var(--transition-speed);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  background-color: #2980b9;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.4rem;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }
}
</style>