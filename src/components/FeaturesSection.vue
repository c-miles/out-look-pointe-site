<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <ion-icon name="home-outline"></ion-icon>
          <h3>Private Lots</h3>
          <p>Spacious, quiet graveled lots with 35-50 amp hookups</p>
        </div>
        <div class="feature-card">
          <ion-icon name="time-outline"></ion-icon>
          <h3>24/7 Access</h3>
          <p>Office hours 7am - 8pm, with 24/7 campground access</p>
        </div>
        <div class="feature-card">
          <ion-icon name="leaf-outline"></ion-icon>
          <h3>Natural Setting</h3>
          <p>10 acres of grassy areas for activities and scenic views</p>
        </div>
        <div class="feature-card">
          <ion-icon name="location-outline"></ion-icon>
          <h3>Prime Location</h3>
          <p>Just 3/10th mile from town, close to all amenities</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
.features-section {
  background-color: #f8f9fa;
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
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
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
  background: var(--accent-color);
  transform: scaleX(0);
  transition: transform var(--transition-speed) ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card ion-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: var(--spacing-unit);
  transition: transform var(--transition-speed) ease;
}

.feature-card:hover ion-icon {
  transform: scale(1.1);
}

.feature-card h3 {
  margin: var(--spacing-unit) 0;
  color: var(--primary-color);
}

.feature-card p {
  color: var(--secondary-color);
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