<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Contact Us</h2>
      <div class="contact-grid">
        <a class="contact-item" href="tel:+13046174610">
          <IconPhone :size="30" />
          <span>Call</span>
        </a>
        <a class="contact-item" href="mailto:danajenkinswalters@yahoo.com">
          <IconMail :size="30" />
          <span>Email</span>
        </a>
        <a class="contact-item" href="https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006" target="_blank" rel="noopener noreferrer">
          <IconMap :size="30" />
          <span>Directions</span>
        </a>
        <a class="contact-item" href="https://www.facebook.com/MiltonWV" target="_blank" rel="noopener noreferrer">
          <IconFacebook :size="30" />
          <span>Facebook</span>
        </a>
      </div>
      <p class="footer-text">
        Located in beautiful Milton, West Virginia. We pride ourselves in providing quiet and safe campgrounds. *Aggressive dogs not permitted
      </p>
    </div>
  </section>
</template>

<script>
import IconPhone from './icons/IconPhone.vue'
import IconMail from './icons/IconMail.vue'
import IconMap from './icons/IconMap.vue'
import IconFacebook from './icons/IconFacebook.vue'

export default {
  name: 'ContactSection',
  components: { IconPhone, IconMail, IconMap, IconFacebook }
}
</script>

<style scoped>
.contact-section {
  background-color: var(--panel);
  color: var(--on-panel);
  padding: var(--section-y) 0;
}

.contact-section h2 {
  color: var(--on-panel);
  margin-bottom: var(--heading-gap);
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--grid-gap);
  margin: 0 0 var(--space-l);
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2xs);
  color: var(--on-panel);
  text-decoration: none;
  min-width: var(--chip-min);
  /* Text-adjacent padding does not scale with the viewport; it is tied to the
     label, whose size barely moves. One value at every width. */
  padding: var(--space-xs);
  border: var(--border-hair) solid var(--panel-hairline);
  border-radius: var(--r-md);
  font-size: var(--fs-small);
  transition: background-color var(--dur-2) var(--ease-out),
              border-color var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out-snap);
}

/* Hover signals "this is interactive". It does not need to introduce a second
   hue, which on this panel was both noisy and low contrast. */
@media (hover: hover) and (pointer: fine) {
  .contact-item:hover {
    background-color: var(--panel-hover);
    border-color: var(--on-panel-muted);
  }
}

.contact-item:focus-visible {
  background-color: var(--panel-hover);
  border-color: var(--on-panel-muted);
}

.contact-item:active {
  background-color: var(--panel-active);
  transform: scale(var(--press-control));
  transition-duration: var(--dur-1);
}

.contact-item:focus-visible {
  outline: var(--focus-ring) solid var(--amber);
  outline-offset: var(--focus-ring);
}

.contact-item svg {
  margin-bottom: 0;
}

.footer-text {
  max-width: var(--measure-prose);
  margin: 0;
  text-align: left;
  color: var(--on-panel-muted);
  font-size: var(--fs-small);
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-item {
    min-width: 0;
  }
}
</style>