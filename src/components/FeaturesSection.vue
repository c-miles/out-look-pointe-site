<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="features-grid">
        <div class="feature-card">
          <IconHome :size="28" />
          <h3>Private Lots</h3>
          <p>Spacious, quiet graveled lots with <span class="nowrap">35-50 amp</span> hookups</p>
        </div>
        <div class="feature-card">
          <IconClock :size="28" />
          <h3>24/7 Access</h3>
          <p>Office hours <span class="nowrap">7am - 8pm</span>, with <span class="nowrap">24/7</span> campground access</p>
        </div>
        <div class="feature-card">
          <IconLeaf :size="28" />
          <h3>Natural Setting</h3>
          <p>10 acres of grassy areas for activities and scenic views</p>
        </div>
        <div class="feature-card">
          <IconPin :size="28" />
          <h3>Prime Location</h3>
          <p>Just <span class="nowrap">3/10th mile</span> from town, close to all amenities</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconHome from './icons/IconHome.vue'
import IconClock from './icons/IconClock.vue'
import IconLeaf from './icons/IconLeaf.vue'
import IconPin from './icons/IconPin.vue'

export default {
  name: 'FeaturesSection',
  components: { IconHome, IconClock, IconLeaf, IconPin }
}
</script>

<style scoped>
.features-section {
  background-color: var(--bone);
  padding: var(--section-y) 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--grid-gap);
}

.feature-card {
  text-align: center;
  padding: var(--card-pad);
  background-color: var(--surface);
  border-radius: var(--r-card);
  /* The hairline lives in the shadow stack rather than as a border: no box
     model cost, follows the radius, and cross-fades into the hover elevation
     instead of snapping an outline on. */
  box-shadow: var(--elev-raised);
  transition: transform var(--dur-2) var(--ease-out-snap),
              box-shadow var(--dur-2) var(--ease-out-snap);
  position: relative;
  overflow: hidden;
}


/* Hover moves exactly one elevation level. Going rest to lifted made the
   shadow behave as if the card rose 30px while it actually rose 3px, which is
   why it read as cheap. Gated so it does not stick after a tap on a phone. */
@media (hover: hover) and (pointer: fine) {
  .feature-card:hover {
    transform: translateY(calc(var(--lift-card) * -1));
    box-shadow: var(--elev-lifted);
  }
}

.feature-card:active {
  transform: translateY(0) scale(var(--press-card));
  box-shadow: var(--elev-rest);
  transition-duration: var(--dur-1);
}


.feature-card svg {
  color: var(--forest);
  margin-bottom: var(--space-2xs);
}


.feature-card h3 {
  margin: var(--space-2xs) 0;
  color: var(--forest);
  font-size: var(--fs-lede);
  font-weight: var(--fw-semi);
  line-height: var(--lh-h3);
}

.feature-card p {
  color: var(--gravel);
  font-size: var(--fs-small);
  line-height: var(--lh-narrow);
}

@media only screen and (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

</style>
