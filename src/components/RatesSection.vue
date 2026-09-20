<template>
  <section class="rates-section">
    <div class="container">
      <h2>Monthly Rates & Amenities</h2>
      <div class="rates-content">
        <div class="rates-card">
          <div class="header-row">
            <h3>Monthly Stay</h3>
            <span class="price">$600-$700</span>
          </div>
          <ul>
            <li>Utilities included (electric, water, sewer, trash)</li>
            <li>35-50 amp hookups</li>
            <li>24/7 campground access</li>
            <li>Pet friendly*</li>
          </ul>
        </div>
        <div class="amenities-card">
          <div class="header-row">
            <h3>Nearby Amenities</h3>
          </div>
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
  background-color: var(--surface);
  padding: calc(var(--spacing-unit) * 3) 0;
}

.rates-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 3);
  margin-top: calc(var(--spacing-unit) * 3);
}

.rates-card, .amenities-card {
  background-color: var(--surface);
  padding: calc(var(--spacing-unit) * 2.5);
  border-radius: var(--r-md);
  box-shadow: var(--elev-raised);
  transition: transform var(--dur-2) var(--ease-out-snap),
              box-shadow var(--dur-2) var(--ease-out-snap);
  position: relative;
  text-align: left;
}


@media (hover: hover) and (pointer: fine) {
  .rates-card:hover, .amenities-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--elev-lifted);
  }
}


.header-row {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.rates-card h3, .amenities-card h3 {
  margin: 0;
  color: var(--forest);
  font-size: 1.35rem;
  font-weight: 700;
  display: inline-block;
}

.price {
  font-size: 1.1rem;
  color: var(--forest);
  font-weight: 700;
  letter-spacing: -0.01em;
  font-variant-numeric: tabular-nums lining-nums;
  margin: 0 0 0 0.5rem;
  display: inline-block;
  white-space: nowrap;
}

.rates-card ul, .amenities-card ul {
  color: var(--gravel);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  padding: 0 0 0 1.5em;
  list-style: none;
  text-align: left;
}

.rates-card ul li, .amenities-card ul li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1em;
}

.rates-card ul li::before, .amenities-card ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 0.5em;
  height: 0.5em;
  background: var(--forest);
  border-radius: 50%;
  display: inline-block;
  transform: translateY(-50%);
}

@media only screen and (max-width: 768px) {
  .rates-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
  .header-row {
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 1.2rem;
  }
  .price {
    font-size: 1rem;
  }
}
</style>