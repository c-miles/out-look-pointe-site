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
    <header class="hero">
      <div class="hero-content">
        <h1>Outlook Pointe Campground</h1>
        <p class="tagline">Your Home Away From Home in Milton, West Virginia</p>
        <a href="#contact" class="cta-button">Book Your Stay</a>
      </div>
    </header>

    <main>
      <section class="welcome-section">
        <div class="container">
          <h2>Welcome to Your Perfect RV Destination</h2>
          <p class="welcome-text">
            Experience the perfect blend of comfort and nature at Outlook Pointe Campground.
            Our private, quiet lots offer the ideal setting for your RV adventure, just minutes from Milton's amenities.
          </p>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <ion-icon name="home-outline"></ion-icon>
              <h3>Private Lots</h3>
              <p>Spacious, quiet graveled lots with 35-50 amp hookups</p>
            </div>
            <div class="feature-card">
              <ion-icon name="time-outline"></ion-icon>
              <h3>24/7 Access</h3>
              <p>Office hours 7am - 8pm, with 24/7 campground access</p>
            </div>
            <div class="feature-card">
              <ion-icon name="leaf-outline"></ion-icon>
              <h3>Natural Setting</h3>
              <p>10 acres of grassy areas for activities and scenic views</p>
            </div>
            <div class="feature-card">
              <ion-icon name="location-outline"></ion-icon>
              <h3>Prime Location</h3>
              <p>Just 3/10th mile from town, close to all amenities</p>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <div class="container">
          <h2>Our Campground</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="./assets/camp.png" alt="RVs in the campground" />
            </div>
            <div class="gallery-item">
              <img src="./assets/drone_1.jpeg" alt="Aerial view of the campground" />
            </div>
            <div class="gallery-item">
              <img src="./assets/camp3.png" alt="Campground facilities" />
            </div>
            <div class="gallery-item">
              <img src="./assets/drone_2.jpeg" alt="Scenic view of the campground" />
            </div>
          </div>
        </div>
      </section>

      <section class="rates-section">
        <div class="container">
          <h2>Monthly Rates & Amenities</h2>
          <div class="rates-content">
            <div class="rates-card">
              <h3>Monthly Stay</h3>
              <p class="price">$500 - $600</p>
              <ul>
                <li>Utilities included (electric, water, sewer, trash)</li>
                <li>35-50 amp hookups</li>
                <li>24/7 campground access</li>
                <li>Pet friendly*</li>
              </ul>
            </div>
            <div class="amenities-card">
              <h3>Nearby Amenities</h3>
              <ul>
                <li>Grocery stores</li>
                <li>Post office</li>
                <li>Physician's office</li>
                <li>Restaurants</li>
                <li>Churches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
      </section>
    </main>
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
  --container-width: 1200px;
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

.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

.hero {
  height: 100vh;
  background: linear-gradient(rgba(44, 62, 80, 0.5), rgba(44, 62, 80, 0.7)),
              url('./assets/appalachia.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-light);
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  padding: 0 var(--spacing-unit);
  position: relative;
  z-index: 2;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  margin-bottom: var(--spacing-unit);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
}

.tagline {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: calc(var(--spacing-unit) * 2);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: var(--accent-color);
  color: var(--text-light);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.2rem;
  transition: all var(--transition-speed);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  background-color: #2980b9;
}

.welcome-section,
.features-section,
.gallery-section,
.rates-section,
.contact-section {
  padding: calc(var(--spacing-unit) * 3) 0;
}

.welcome-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: var(--secondary-color);
}

.features-section {
  background-color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: calc(var(--spacing-unit) * 2);
  margin-top: calc(var(--spacing-unit) * 3);
}

.feature-card {
  text-align: center;
  padding: calc(var(--spacing-unit) * 2);
  background-color: #f8f9fa;
  border-radius: var(--border-radius);
  transition: transform var(--transition-speed);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card ion-icon {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: var(--spacing-unit);
}

.gallery-section {
  background-color: #f8f9fa;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--spacing-unit) * 2);
  margin-top: calc(var(--spacing-unit) * 3);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  aspect-ratio: 16/9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.rates-section {
  background-color: white;
}

.rates-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: calc(var(--spacing-unit) * 3);
  margin-top: calc(var(--spacing-unit) * 3);
}

.rates-card, .amenities-card {
  background-color: #f8f9fa;
  padding: calc(var(--spacing-unit) * 3);
  border-radius: var(--border-radius);
}

.price {
  font-size: 2.5rem;
  color: var(--accent-color);
  font-weight: 600;
  margin: var(--spacing-unit) 0;
}

.contact-section {
  background-color: var(--primary-color);
  color: var(--text-light);
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

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: calc(var(--spacing-unit) * 2);
}

h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: var(--spacing-unit);
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.4rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .rates-content {
    grid-template-columns: 1fr;
  }

  .welcome-section,
  .features-section,
  .gallery-section,
  .rates-section,
  .contact-section {
    padding: calc(var(--spacing-unit) * 1.5) 0;
  }

  .contact-grid {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 var(--spacing-unit);
  }

  .contact-item {
    min-width: 100px;
  }
}

@media only screen and (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }
}
</style>
