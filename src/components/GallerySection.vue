<template>
  <section class="gallery-section">
    <div class="container">
      <h2>Our Campground</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <picture>
            <source srcset="../assets/camp1.webp" type="image/webp" />
            <img
              src="../assets/camp1.png"
              alt="Spacious RV lots at Outlook Pointe Campground with modern hookups"
              loading="lazy"
              width="800"
              height="450"
            />
          </picture>
        </div>
        <div class="gallery-item">
          <picture>
            <source srcset="../assets/camp2.webp" type="image/webp" />
            <img
              src="../assets/camp2.png"
              alt="Aerial view of Outlook Pointe Campground showing the beautiful natural setting"
              loading="lazy"
              width="800"
              height="450"
            />
          </picture>
        </div>
        <div class="gallery-item">
          <picture>
            <source srcset="../assets/camp3.webp" type="image/webp" />
            <img
              src="../assets/camp3.png"
              alt="Modern amenities and facilities at Outlook Pointe Campground"
              loading="lazy"
              width="800"
              height="450"
            />
          </picture>
        </div>
        <div class="gallery-item">
          <picture>
            <source srcset="../assets/camp4.webp" type="image/webp" />
            <img
              src="../assets/camp4.png"
              alt="Scenic views and natural surroundings of Outlook Pointe Campground"
              loading="lazy"
              width="800"
              height="450"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection'
}
</script>

<style scoped>
.gallery-section {
  background-color: #f8f9fa;
  padding: calc(var(--spacing-unit) * 3) 0;
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
  border-radius: var(--border-radius-lg);
  aspect-ratio: 16/9;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-speed) ease;
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3));
  opacity: 0;
  transition: opacity var(--transition-speed) ease;
  z-index: 1;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media only screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
}
</style>