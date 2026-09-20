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
  padding: calc(var(--spacing-unit) * 3.5) 0;
}

.contact-section h2 {
  color: var(--on-panel);
  margin-bottom: calc(var(--spacing-unit) * 1.5);
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.75rem;
  margin: 0 0 calc(var(--spacing-unit) * 1.75);
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--on-panel);
  text-decoration: none;
  min-width: 108px;
  padding: 0.85rem 0.75rem;
  border: 1px solid var(--panel-hairline);
  border-radius: var(--r-md);
  font-size: 0.95rem;
  transition: background-color var(--dur-2) var(--ease-out),
              border-color var(--dur-2) var(--ease-out),
              transform var(--dur-2) var(--ease-out-snap);
}

/* Hover signals "this is interactive". It does not need to introduce a second
   hue, which on this panel was both noisy and low contrast. */
@media (hover: hover) and (pointer: fine) {
  .contact-item:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: var(--on-panel-muted);
  }
}

.contact-item:focus-visible {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: var(--on-panel-muted);
}

.contact-item:active {
  background-color: rgba(255, 255, 255, 0.14);
  transform: scale(0.985);
  transition-duration: var(--dur-1);
}

.contact-item:focus-visible {
  outline: 3px solid var(--amber);
  outline-offset: 3px;
}

.contact-item svg {
  margin-bottom: 0;
}

.footer-text {
  max-width: 62ch;
  margin: 0;
  text-align: left;
  color: var(--on-panel-muted);
  font-size: 1rem;
  margin-bottom: 0;
}

@media only screen and (max-width: 768px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
    padding: 0;
  }
  .contact-item {
    min-width: 0;
    width: 100%;
    padding: 0.8rem 0.5rem;
  }
}

@media only screen and (max-width: 480px) {
  .contact-grid {
    gap: calc(var(--spacing-unit) * 0.5);
  }
  .contact-item {
    padding: 0.7rem 0.4rem;
  }
}
</style>