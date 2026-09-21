<template>
  <section id="rates" class="rates">
    <div class="container auto-grid">
      <div>
        <h2>Monthly rates</h2>
        <p class="price-line">
          <span class="price figure type-display nowrap">$600-$700</span>
          <span class="type-lede muted">per month</span>
        </p>
        <p class="explainer">
          The difference is lot size, and the rate is the same all year. Electric,
          water, sewer and trash are included.
        </p>
      </div>
      <ul class="terms ruled">
        <li v-for="term in terms" :key="term">{{ term }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RatesSection',
  data() {
    return {
      // The new lots will be metered, so never promise "nothing added on top".
      terms: [
        'No deposit required. Call and we will hold your lot.',
        'No long lease and no paperwork.',
        'A week of notice before you leave is appreciated.',
        'Monthly stays come first. Shorter stays are possible when a lot is open.',
        'We are adding 14 new lots this fall.',
      ],
    }
  },
}
</script>

<style scoped>
.rates {
  background-color: var(--surface);
}

h2 {
  margin-bottom: var(--space-s);
}

.price-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2xs) var(--space-xs);
  margin-bottom: var(--space-m);
}

.price {
  color: var(--forest);
}

.explainer {
  margin: 0;
}

.terms {
  list-style: none;
  margin: 0;
  padding: 0;
}

.terms li {
  line-height: var(--lh-narrow);
  text-wrap: pretty;
}
</style>
