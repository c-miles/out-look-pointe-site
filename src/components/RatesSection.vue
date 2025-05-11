<template>
  <section class="rates-section">
    <div class="container">
      <h2>Monthly Rates & Amenities</h2>
      <div class="rates-content">
        <div class="rates-card">
          <h3>Monthly Stay</h3>
          <p class="price">$500 - $600</p>
          <ul>
            <li>Utilities included (electric, water, sewer, trash)</li>
            <li>35-50 amp hookups</li>
            <li>24/7 campground access</li>
            <li>Pet friendly*</li>
          </ul>
        </div>
        <div class="amenities-card">
          <h3>Nearby Amenities</h3>
          <ul>
            <li>Grocery stores</li>
            <li>Post office</li>
            <li>Physician's office</li>
            <li>Restaurants</li>
            <li>Churches</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RatesSection'
}
</script>

<style scoped>
.rates-section {
  background-color: white;
  padding: calc(var(--spacing-unit) * 3) 0;
}

.rates-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 3);
  margin-top: calc(var(--spacing-unit) * 3);
}

.rates-card, .amenities-card {
  background-color: #f8f9fa;
  padding: calc(var(--spacing-unit) * 3);
  border-radius: var(--border-radius);
}

.price {
  font-size: 2.5rem;
  color: var(--accent-color);
  font-weight: 600;
  margin: var(--spacing-unit) 0;
}

@media only screen and (max-width: 768px) {
  .rates-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
  .price {
    font-size: 1.5rem;
  }
}
</style>