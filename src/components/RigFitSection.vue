<template>
  <section id="rig-fit" class="on-panel">
    <div class="container">
      <h2>Will my rig fit?</h2>
      <p class="lede">
        The biggest rig we have hosted is 46 feet, and most motorhomes top out
        around 45. Two of our lots fit rigs up to about 35 feet and the rest take
        full-size ones. We have never had to turn anyone away.
      </p>
      <ul class="specs auto-grid auto-grid--tight">
        <li v-for="spec in specs" :key="spec.label">
          <!-- The h2 step, not h1: at the h1 step "35-50 amp" measured wider
               than a one-third column and ran into its neighbour. -->
          <span class="figure type-h2 nowrap">{{ spec.value }}</span>
          <span class="type-small muted">{{ spec.label }}</span>
        </li>
      </ul>
      <p class="rig-note muted">Bringing a big rig? Call ahead and we will talk you in.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RigFitSection',
  data() {
    return {
      specs: [
        { value: '46 ft', label: 'Our biggest so far, not a limit' },
        { value: '35-50 amp', label: 'Electric service' },
        { value: 'Back-in', label: 'Most lots, level gravel' },
      ],
    }
  },
}
</script>

<style scoped>
.lede {
  margin-bottom: var(--space-xl);
}

/* The default card minimum, not the fact minimum: these values are set large and
   must never share a phone-width row. Three across on desktop, stacked on a phone. */
.specs {
  list-style: none;
  margin: 0 0 var(--space-xl);
  padding: 0;
}

.specs li {
  display: grid;
  gap: var(--space-2xs);
  padding-top: var(--space-s);
  border-top: var(--border-hair) solid var(--rule-color);
}

.rig-note {
  margin: 0;
}
</style>
