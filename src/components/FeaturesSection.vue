<template>
  <section class="features-section">
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
  background-color: white;
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
  background-color: #f8f9fa;
  border-radius: var(--border-radius);
  transition: transform var(--transition-speed);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card ion-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: var(--spacing-unit);
}

@media only screen and (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
}
</style>