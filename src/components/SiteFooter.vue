<template>
  <!-- A sign-off, not a second contact block. The section directly above gives
       the phone, address and hours; on a single page, repeating them here adds
       nothing for visitors or for search. -->
  <footer class="site-footer on-panel type-small">
    <div class="container footer-row">
      <p>
        <strong class="footer-name">{{ site.name }}</strong>
        <span class="muted">{{ site.address.place }}</span>
      </p>
      <p class="footer-meta muted">
        <a :href="site.links.facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
        <span>&copy; {{ year }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
import { site } from '../data/site'

export default {
  name: 'SiteFooter',
  data() {
    return { site, year: new Date().getFullYear() }
  },
}
</script>

<style scoped>
.site-footer {
  background-color: var(--forest-deep);
  padding-block: var(--space-l);
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-2xs) var(--space-l);
}

.site-footer p {
  margin: 0;
  max-width: none;
}

.footer-name {
  font-family: var(--font-display);
  font-weight: var(--fw-semi);
  margin-right: var(--space-2xs);
}

.footer-meta {
  display: flex;
  gap: var(--space-m);
}

.site-footer a {
  color: var(--on-panel);
  text-underline-offset: var(--space-3xs);
}
</style>
