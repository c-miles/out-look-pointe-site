<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <IconHome :size="28" />
          <h3>Private Lots</h3>
          <p>Spacious, quiet graveled lots with 35-50 amp hookups</p>
        </div>
        <div class="feature-card">
          <IconClock :size="28" />
          <h3>24/7 Access</h3>
          <p>Office hours 7am - 8pm, with 24/7 campground access</p>
        </div>
        <div class="feature-card">
          <IconLeaf :size="28" />
          <h3>Natural Setting</h3>
          <p>10 acres of grassy areas for activities and scenic views</p>
        </div>
        <div class="feature-card">
          <IconPin :size="28" />
          <h3>Prime Location</h3>
          <p>Just 3/10th mile from town, close to all amenities</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconHome from './icons/IconHome.vue'
import IconClock from './icons/IconClock.vue'
import IconLeaf from './icons/IconLeaf.vue'
import IconPin from './icons/IconPin.vue'

export default {
  name: 'FeaturesSection',
  components: { IconHome, IconClock, IconLeaf, IconPin }
}
</script>

<style scoped>
.features-section {
  background-color: var(--bone);
  padding: calc(var(--spacing-unit) * 3) 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--spacing-unit) * 2);
  margin-top: calc(var(--spacing-unit) * 3);
}

.feature-card {
  text-align: center;
  padding: calc(var(--spacing-unit) * 2);
  background-color: var(--surface);
  border-radius: var(--r-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--amber);
  transform: scaleX(0);
  transition: transform var(--transition-speed) ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card svg {
  font-size: 2.5rem;
  color: var(--amber);
  margin-bottom: var(--spacing-unit);
  transition: transform var(--transition-speed) ease;
}

.feature-card:hover svg {
  transform: scale(1.1);
}

.feature-card h3 {
  margin: var(--spacing-unit) 0;
  color: var(--forest);
}

.feature-card p {
  color: var(--gravel);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media only screen and (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
}
</style>