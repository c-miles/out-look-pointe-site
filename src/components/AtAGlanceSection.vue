<template>
  <section id="at-a-glance" class="glance" aria-labelledby="glance-heading">
    <div class="container">
      <h2 id="glance-heading" class="visually-hidden">At a glance</h2>
      <dl class="glance-facts ledger">
        <div v-for="fact in facts" :key="fact.label" class="fact">
          <dt class="type-caption muted">{{ fact.label }}</dt>
          <dd class="figure type-h3 nowrap">{{ fact.value }}</dd>
          <dd class="type-small">{{ fact.note }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import { rating } from '../data/rating'

export default {
  name: 'AtAGlanceSection',
  data() {
    return {
      rating,
      // Values come from the owners. Don't round or invent.
      ownerFacts: [
        { label: 'Monthly rate', value: '$600-$700', note: 'Electric, water, sewer, trash included' },
        { label: 'Hookups', value: '35-50 amp', note: 'Full hookups at every lot' },
        { label: 'Biggest rig so far', value: '46 ft', note: 'We have never turned one away' },
        { label: 'Deposit', value: 'None', note: 'Call and we hold your lot' },
        { label: 'To town', value: '3/10 mile', note: 'Groceries, post office, doctor' },
      ],
    }
  },
  computed: {
    // The guests' rating goes last, after the owners' own facts.
    facts() {
      return [
        ...this.ownerFacts,
        {
          label: 'Google rating',
          value: `${this.rating.value.toFixed(1)} of 5`,
          note: `From ${this.rating.count} guest reviews`,
        },
      ]
    },
  },
}
</script>

<style scoped>
.glance {
  background-color: var(--surface);
}

/* Fixed columns, not auto-fit: six across is too narrow for "$600-$700". */
.glance-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl) var(--grid-gap);
  margin: 0;
}

.fact {
  display: grid;
  gap: var(--space-3xs);
}

.fact dt {
  font-weight: var(--fw-medium);
}

.fact dd {
  margin: 0;
}

.fact .figure {
  color: var(--forest);
}

@media only screen and (max-width: 768px) {
  .glance-facts {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-l) var(--grid-gap);
  }
}
</style>
