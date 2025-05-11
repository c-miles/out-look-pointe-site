<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Contact Us</h2>
      <div class="contact-grid">
        <a class="contact-item" href="tel:+13047433035">
          <ion-icon name="phone-portrait-outline"></ion-icon>
          <span>Call</span>
        </a>
        <a class="contact-item" href="mailto:danajenkinswalters@yahoo.com">
          <ion-icon name="mail-outline"></ion-icon>
          <span>Email</span>
        </a>
        <a class="contact-item" href="https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006" target="_blank" rel="noopener noreferrer">
          <ion-icon name="map-outline"></ion-icon>
          <span>Directions</span>
        </a>
        <a class="contact-item" href="https://www.facebook.com/MiltonWV" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-facebook"></ion-icon>
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
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-section {
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: calc(var(--spacing-unit) * 3) 0;
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(var(--spacing-unit) * 2);
  margin: calc(var(--spacing-unit) * 3) 0;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-light);
  text-decoration: none;
  transition: color var(--transition-speed);
  min-width: 120px;
  padding: var(--spacing-unit);
}

.contact-item:hover {
  color: var(--accent-color);
}

.contact-item ion-icon {
  font-size: 2.5rem;
  margin-bottom: calc(var(--spacing-unit) * 0.5);
}

.footer-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  opacity: 0.9;
}

@media only screen and (max-width: 768px) {
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-unit);
    justify-items: center;
    padding: 0 var(--spacing-unit);
  }
  .contact-item {
    min-width: 100px;
    padding: var(--spacing-unit);
  }
}

@media only screen and (max-width: 480px) {
  .contact-grid {
    gap: calc(var(--spacing-unit) * 0.5);
  }
  .contact-item {
    min-width: 80px;
    padding: calc(var(--spacing-unit) * 0.5);
  }
}
</style>