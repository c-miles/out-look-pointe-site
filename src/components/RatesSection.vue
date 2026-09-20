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
  padding: var(--section-y) 0;
}

.rates-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--card-min), 1fr));
  gap: var(--space-xl);
  margin-top: var(--heading-gap);
}

.rates-card, .amenities-card {
  background-color: var(--surface);
  padding: var(--card-pad);
  border-radius: var(--r-md);
  box-shadow: var(--elev-raised);
  transition: transform var(--dur-2) var(--ease-out-snap),
              box-shadow var(--dur-2) var(--ease-out-snap);
  position: relative;
  text-align: left;
}


@media (hover: hover) and (pointer: fine) {
  .rates-card:hover, .amenities-card:hover {
    transform: translateY(calc(var(--lift-card) * -1));
    box-shadow: var(--elev-lifted);
  }
}


.header-row {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: var(--space-2xs) var(--space-s);
  margin-bottom: var(--space-m);
}

.rates-card h3, .amenities-card h3 {
  margin: 0;
  color: var(--forest);
  font-size: var(--fs-lede);
  font-weight: var(--fw-semi);
}

.price {
  margin: 0;
  color: var(--forest);
  font-size: var(--fs-body);
  font-weight: var(--fw-semi);
  letter-spacing: var(--ls-lede);
  font-variant-numeric: tabular-nums lining-nums;
  white-space: nowrap;
}

.rates-card ul, .amenities-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--gravel);
  font-size: var(--fs-small);
  line-height: var(--lh-narrow);
}

.rates-card ul li, .amenities-card ul li {
  position: relative;
  padding-left: var(--space-m);
  margin-bottom: var(--space-2xs);
}

.rates-card ul li::before, .amenities-card ul li::before {
  content: '';
  position: absolute;
  left: 0;
  /* Half the line box, so the bullet centres on the first line whatever the
     type scale does. */
  top: calc(var(--lh-narrow) * 0.5em);
  width: var(--bullet);
  height: var(--bullet);
  background: var(--forest);
  border-radius: var(--r-round);
  display: inline-block;
  transform: translateY(-50%);
}

</style>
