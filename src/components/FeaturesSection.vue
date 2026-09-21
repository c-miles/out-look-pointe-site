<template>
  <section id="features" class="features">
    <div class="container">
      <h2>Why people stay</h2>
      <div class="features-grid">
        <article
          v-for="(feature, i) in features"
          :key="feature.title"
          class="feature-card"
          :class="{ 'feature-card--lead on-panel': i === 0 }"
        >
          <AppIcon :name="feature.icon" class="feature-icon" />
          <h3 :class="i === 0 ? 'type-h3' : 'type-lede'">{{ feature.title }}</h3>
          <p class="muted" :class="{ 'type-small': i !== 0 }">{{ feature.body }}</p>
          <p v-if="feature.stat" class="feature-stat">
            <span class="figure type-h2 nowrap">{{ feature.stat.value }}</span>
            <span class="type-small muted">{{ feature.stat.label }}</span>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from './AppIcon.vue'
import { site } from '../data/site'

export default {
  name: 'FeaturesSection',
  components: { AppIcon },
  data() {
    return {
      // The first entry is the lead card.
      features: [
        {
          icon: 'home',
          title: 'Quiet, private lots',
          body: 'Spacious graveled lots with 35-50 amp hookups, and owners who live on site. Guests call it quiet, and they are right.',
          stat: { value: '3 years', label: 'is how long our longest resident stayed' },
        },
        {
          icon: 'clock',
          title: 'Open around the clock',
          body: `Come and go on your own schedule. The office is open ${site.officeHours}.`,
        },
        {
          icon: 'leaf',
          title: 'Ten acres',
          body: 'Open grassy ground to walk the dog or stretch your legs without leaving the property.',
        },
        {
          icon: 'pin',
          title: 'Close to town',
          body: 'Three tenths of a mile to groceries, the post office, a doctor, restaurants and churches.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.features {
  background-color: var(--surface);
}

/* Deliberately unequal: the lead spans both rows, the last spans two
   columns. */
.features-grid {
  display: grid;
  grid-template-columns: var(--grid-lead) 1fr 1fr;
  grid-template-areas:
    "lead b c"
    "lead d d";
  gap: var(--grid-gap);
}

.feature-card {
  padding: var(--card-pad);
  background-color: var(--bone);
  border-radius: var(--r-card);
  box-shadow: var(--elev-rest);
}

.feature-card:nth-child(1) { grid-area: lead; }
.feature-card:nth-child(2) { grid-area: b; }
.feature-card:nth-child(3) { grid-area: c; }
.feature-card:nth-child(4) { grid-area: d; }

/* The stat is pinned to the bottom so the tall card doesn't leave a gap. */
.feature-card--lead {
  display: flex;
  flex-direction: column;
  background-color: var(--panel);
  box-shadow: var(--elev-raised);
}

.feature-icon {
  color: var(--forest);
  margin-bottom: var(--space-s);
}

.feature-card--lead .feature-icon {
  color: var(--text-muted);
}

/* Lede size, heading leading. */
h3 {
  font-weight: var(--fw-semi);
  line-height: var(--lh-h3);
  margin-bottom: var(--space-2xs);
}

.feature-card p {
  max-width: var(--measure-card);
  margin-bottom: 0;
}

.feature-card--lead .feature-stat {
  margin-top: auto;
  padding-top: var(--space-m);
  border-top: var(--border-hair) solid var(--rule-color);
  display: grid;
  gap: var(--space-3xs);
}

/* Keeps the stat off the body copy when the card is short (stacked on a
   phone). */
.feature-card--lead > p:not(.feature-stat) {
  margin-bottom: var(--space-l);
}

@media only screen and (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    grid-template-areas: none;
  }

  .feature-card:nth-child(n) {
    grid-area: auto;
  }
}
</style>
