<template>
  <head>
    <title>Outlook Pointe RV CampGrounds in Milton, West Virginia</title>
    <meta
      name="description"
      content="Private RV campground in beautiful Milton, West Virginia"
    />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
  </head>
  <div id="app">
    <header class="site-header">
      <div class="header-content">
        <h1>Outlook Pointe Campground</h1>
        <p class="tagline">Your Home Away From Home in Milton, West Virginia</p>
      </div>
    </header>

    <main id="body">
      <section class="hero-section">
        <div class="image-grid">
          <div class="image-container">
            <img src="./assets/camp.png" alt="RVs in the campground" />
          </div>
          <div class="image-container">
            <img src="./assets/drone_1.jpeg" alt="Aerial view of the campground" />
          </div>
        </div>

        <div class="features">
          <div class="feature-column">
            <h3>Campground Features</h3>
            <ul>
              <li>Private (quiet) graveled lots</li>
              <li>Office hours 7am - 8pm everyday, 24/7 campground access</li>
              <li>3/10th a mile from town</li>
              <li>35-50 amp hookups</li>
              <li>10 acres of grassy areas for activities</li>
              <li>Scenic views overlooking the City of Milton</li>
              <li>Pet friendly*</li>
            </ul>
          </div>

          <div class="feature-column">
            <h3>Rates & Amenities</h3>
            <ul>
              <li>$500-$600/Month</li>
              <li>Utilities included (electric, water, sewer, trash)</li>
              <li>Within a mile from essential services</li>
              <li>No flooding concerns</li>
              <li>Peaceful location away from train tracks</li>
            </ul>
          </div>
        </div>

        <div class="image-grid">
          <div class="image-container">
            <img src="./assets/camp3.png" alt="Campground facilities" />
          </div>
          <div class="image-container">
            <img src="./assets/drone_2.jpeg" alt="Scenic view of the campground" />
          </div>
        </div>
      </section>
    </main>

    <footer id="footer">
      <div class="footer-content">
        <h2>Contact Us</h2>
        <div class="contact-grid">
          <a class="contact-item" href="tel:+13047433035">
            <ion-icon name="phone-portrait-outline"></ion-icon>
            <span>Call Us</span>
          </a>
          <a class="contact-item" href="mailto:danajenkinswalters@yahoo.com">
            <ion-icon name="mail-outline"></ion-icon>
            <span>Email Us</span>
          </a>
          <a class="contact-item" href="https://www.facebook.com/MiltonWV">
            <ion-icon name="logo-facebook"></ion-icon>
            <span>Facebook</span>
          </a>
          <a class="contact-item" href="https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006">
            <ion-icon name="map-outline"></ion-icon>
            <span>Directions</span>
          </a>
        </div>
        <p class="footer-text">
          Located in beautiful Milton, West Virginia. We pride ourselves in providing quiet and safe campgrounds. *Aggressive dogs not permitted
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --text-light: #ecf0f1;
  --text-dark: #2c3e50;
  --spacing-unit: 1rem;
  --border-radius: 8px;
  --transition-speed: 0.3s;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  line-height: 1.6;
}

.site-header {
  background: linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)),
              url('./assets/camp.png') center/cover;
  color: var(--text-light);
  padding: calc(var(--spacing-unit) * 4) var(--spacing-unit);
  text-align: center;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: var(--spacing-unit);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.tagline {
  font-size: 1.5rem;
  font-weight: 300;
  opacity: 0.9;
}

.hero-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--spacing-unit) * 2);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing-unit) * 2);
  margin-bottom: calc(var(--spacing-unit) * 3);
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-speed);
}

.image-container:hover {
  transform: translateY(-5px);
}

.image-container img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.image-container:hover img {
  transform: scale(1.05);
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing-unit) * 3);
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: calc(var(--spacing-unit) * 3);
  border-radius: var(--border-radius);
  margin: calc(var(--spacing-unit) * 3) 0;
}

.feature-column h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: var(--spacing-unit);
  color: var(--text-light);
}

.feature-column ul {
  list-style: none;
}

.feature-column li {
  margin-bottom: calc(var(--spacing-unit) * 0.5);
  padding-left: calc(var(--spacing-unit) * 1.5);
  position: relative;
}

.feature-column li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--accent-color);
}

#footer {
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: calc(var(--spacing-unit) * 3) var(--spacing-unit);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-unit);
  margin: calc(var(--spacing-unit) * 2) 0;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-light);
  text-decoration: none;
  transition: color var(--transition-speed);
}

.contact-item:hover {
  color: var(--accent-color);
}

.contact-item ion-icon {
  font-size: 2rem;
  margin-bottom: calc(var(--spacing-unit) * 0.5);
}

.contact-item span {
  font-size: 0.9rem;
}

.footer-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
  opacity: 0.9;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .features {
    grid-template-columns: 1fr;
    padding: calc(var(--spacing-unit) * 2);
  }

  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .image-container img {
    height: 300px;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .image-container img {
    height: 250px;
  }
}
</style>
