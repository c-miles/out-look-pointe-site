<template>
  <section id="whats-here" class="whatshere">
    <div class="container">
      <h2>What is here, and what is not</h2>
      <p class="lede muted">We would rather you know before you pull in than after.</p>
      <div class="columns auto-grid">
        <div v-for="list in lists" :key="list.title">
          <h3 class="type-lede">{{ list.title }}</h3>
          <ul class="checklist">
            <li v-for="item in list.items" :key="item">
              <AppIcon :name="list.icon" class="marker" :class="`marker--${list.icon}`" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <p class="house-rule muted">
        One house rule: take it slow on the gravel road. It keeps the dust down for everyone.
      </p>
    </div>
  </section>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'WhatsHereSection',
  components: { AppIcon },
  data() {
    return {
      lists: [
        {
          title: 'On site',
          icon: 'check',
          items: [
            'Mail and package delivery',
            'Trash included, dumpster on site',
            '24/7 access, with the owners living on site',
            'Pets welcome, no aggressive dogs',
          ],
        },
        {
          // Be upfront about what's missing. Better than finding out on
          // arrival.
          title: 'Not on site',
          icon: 'minus',
          items: [
            'No bathhouse or showers',
            'No laundry on site. Town is three tenths of a mile away',
            'No WiFi. Bring your own hotspot',
            'No propane on site. It is available nearby',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.whatshere {
  background-color: var(--bone);
}

.lede,
.columns {
  margin-bottom: var(--space-xl);
}

/* Lede size, heading leading. */
h3 {
  font-weight: var(--fw-semi);
  line-height: var(--lh-h3);
  margin-bottom: var(--space-s);
}

.checklist {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-xs);
}

.checklist li {
  display: grid;
  grid-template-columns: var(--icon-sm) 1fr;
  gap: var(--space-xs);
  line-height: var(--lh-narrow);
  text-wrap: pretty;
}

.marker {
  width: var(--icon-sm);
  height: var(--icon-sm);
  /* Line the icon up with the first line of text. */
  margin-top: calc((var(--lh-narrow) * 1em - var(--icon-sm)) / 2);
}

.marker--check {
  color: var(--forest);
}

.marker--minus {
  color: var(--text-muted);
}

.house-rule {
  margin: 0;
  padding-top: var(--space-m);
  border-top: var(--border-hair) solid var(--rule-color);
}
</style>
