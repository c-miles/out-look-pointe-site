<template>
  <div>
    <section class="gallery-section">
      <div class="container">
        <h2>Our Campground</h2>
        <div class="gallery-grid">
          <div class="gallery-item"
               v-for="(img, i) in images" :key="i"
               :class="{ clickable: !isMobile }"
               @click="maybeOpenLightbox(i)"
               tabindex="0"
               @keyup.enter="maybeOpenLightbox(i)">
            <picture>
              <source :srcset="img.webp" type="image/webp" />
              <img
                :src="img.png"
                :alt="img.alt"
                loading="lazy"
                width="800"
                height="450"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div v-if="lightboxIndex !== null && !isMobile" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-img-wrapper">
          <img
            class="lightbox-img"
            :src="images[lightboxIndex].png"
            :alt="images[lightboxIndex].alt"
          />
          <button class="lightbox-close" @click="closeLightbox" aria-label="Close">&times;</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      images: [
        {
          png: require('../assets/camp1.png'),
          webp: require('../assets/camp1.webp'),
          alt: 'Spacious RV lots at Outlook Pointe Campground with modern hookups',
        },
        {
          png: require('../assets/camp2.png'),
          webp: require('../assets/camp2.webp'),
          alt: 'Aerial view of Outlook Pointe Campground showing the beautiful natural setting',
        },
        {
          png: require('../assets/camp3.png'),
          webp: require('../assets/camp3.webp'),
          alt: 'Modern amenities and facilities at Outlook Pointe Campground',
        },
        {
          png: require('../assets/camp4.png'),
          webp: require('../assets/camp4.webp'),
          alt: 'Scenic views and natural surroundings of Outlook Pointe Campground',
        },
      ],
      lightboxIndex: null,
      isMobile: false,
    };
  },
  methods: {
    maybeOpenLightbox(i) {
      if (!this.isMobile) {
        this.openLightbox(i);
      }
    },
    openLightbox(i) {
      this.lightboxIndex = i;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', this.handleKeydown);
    },
    closeLightbox() {
      this.lightboxIndex = null;
      document.body.style.overflow = '';
      window.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(e) {
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowRight' && this.lightboxIndex < this.images.length - 1) this.lightboxIndex++;
      if (e.key === 'ArrowLeft' && this.lightboxIndex > 0) this.lightboxIndex--;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.checkMobile);
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
.gallery-section {
  background-color: #f8f9fa;
  padding: calc(var(--spacing-unit) * 3) 0;
  position: static !important;
  overflow: visible !important;
}

.container {
  position: static !important;
  overflow: visible !important;
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
  border-radius: var(--border-radius-md);
  aspect-ratio: 16/9;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-speed) ease, transform var(--transition-speed) ease;
  background: #fff;
}

.gallery-item:hover {
  box-shadow: var(--shadow-hover);
  z-index: 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-md);
  transition: transform var(--transition-speed) ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item.clickable {
  cursor: pointer;
}

/* Lightbox styles */
.lightbox-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(30, 40, 60, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999 !important;
  animation: fadeIn 0.2s;
}

.lightbox-img-wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  background: #fff;
}

.lightbox-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(30, 40, 60, 0.85);
  border: none;
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.2s, background 0.2s;
  padding: 0.2em 0.5em;
  line-height: 1;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-close:hover {
  color: var(--accent-color);
  background: rgba(30, 40, 60, 1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-unit);
  }
  .lightbox-img {
    max-width: 98vw;
    max-height: 60vh;
  }
  .lightbox-close {
    top: 0.2rem;
    right: 0.2rem;
    font-size: 1.5rem;
  }
}
</style>