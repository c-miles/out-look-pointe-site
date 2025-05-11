<template>
  <section class="gallery-section">
    <div class="container">
      <h2>Our Campground</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="../assets/camp.png" alt="RVs in the campground" />
        </div>
        <div class="gallery-item">
          <img src="../assets/drone_1.jpeg" alt="Aerial view of the campground" />
        </div>
        <div class="gallery-item">
          <img src="../assets/camp3.png" alt="Campground facilities" />
        </div>
        <div class="gallery-item">
          <img src="../assets/drone_2.jpeg" alt="Scenic view of the campground" />
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

@media only screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
}
</style>