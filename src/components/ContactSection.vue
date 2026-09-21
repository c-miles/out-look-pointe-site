<template>
  <section id="contact" class="on-panel">
    <div class="container auto-grid">
      <div>
        <h2>Call to check availability</h2>
        <p class="lede muted">
          We are often full, so the fastest way to get a lot is a phone call. A couple
          of weeks of notice is ideal, though a same-day call sometimes works out.
        </p>
        <a class="phone tap figure type-h2" :href="site.phone.href">
          <AppIcon name="phone" class="muted" />
          <span class="nowrap">{{ site.phone.display }}</span>
        </a>
      </div>

      <dl class="details ruled">
        <div>
          <dt class="type-caption muted">Office hours</dt>
          <dd><span class="nowrap">{{ site.officeHours }}</span>, every day. Campground access is 24/7.</dd>
        </div>
        <div>
          <dt class="type-caption muted">Address</dt>
          <dd>
            <address>{{ site.address.street }}<br />{{ site.address.cityLine }}</address>
            <a class="tap" :href="site.links.maps" target="_blank" rel="noopener noreferrer">Get directions</a>
          </dd>
        </div>
        <div>
          <dt class="type-caption muted">Email</dt>
          <dd><a class="tap" :href="`mailto:${site.email}`">{{ site.email }}</a></dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
import AppIcon from './AppIcon.vue'
import { site } from '../data/site'

export default {
  name: 'ContactSection',
  components: { AppIcon },
  data() {
    return { site }
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: var(--space-s);
}

.lede {
  margin-bottom: var(--space-l);
}

.phone {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding-bottom: var(--space-3xs);
  border-bottom: var(--border-rule) solid var(--amber);
  color: inherit;
  text-decoration: none;
  transition: border-color var(--dur-2) var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .phone:hover {
    border-bottom-color: currentColor;
  }
}

.details {
  margin: 0;
}

.details dt {
  font-weight: var(--fw-medium);
  margin-bottom: var(--space-3xs);
}

.details dd {
  margin: 0;
  line-height: var(--lh-narrow);
}

.details address {
  font-style: normal;
}

.details a {
  color: inherit;
  text-underline-offset: var(--space-3xs);
  overflow-wrap: anywhere;
}
</style>
