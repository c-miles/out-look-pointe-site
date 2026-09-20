<template>
  <section id="at-a-glance" class="glance" aria-labelledby="glance-heading">
    <div class="container">
      <h2 id="glance-heading" class="visually-hidden">At a glance</h2>
      <dl class="glance-facts auto-grid auto-grid--tight">
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
export default {
  name: 'AtAGlanceSection',
  data() {
    return {
      // The five things a caller asks before anything else. Every value comes
      // from the owners; none is rounded up or invented.
      facts: [
        { label: 'Monthly rate', value: '$600-$700', note: 'Every utility included' },
        { label: 'Hookups', value: '35-50 amp', note: 'Electric, water, sewer, trash' },
        { label: 'Biggest rig so far', value: '46 ft', note: 'We have never turned one away' },
        { label: 'Deposit', value: 'None', note: 'Call and we hold your lot' },
        { label: 'To town', value: '3/10 mile', note: 'Groceries, post office, doctor' },
      ],
    }
  },
}
</script>

<style scoped>
.glance {
  background-color: var(--surface);
}

.glance-facts {
  --auto-min: var(--fact-min);
  margin: 0;
}

/* A short rule above each fact instead of a box around it. Five bordered cards
   directly under the hero would be the template move; this reads as a ledger. */
.fact {
  display: grid;
  gap: var(--space-3xs);
  padding-top: var(--space-xs);
  border-top: var(--border-rule) solid var(--forest);
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
</style>
