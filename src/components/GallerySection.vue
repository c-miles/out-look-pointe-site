<template>
  <div>
    <section class="gallery-section">
      <div class="container">
        <h2>Our Campground</h2>
        <div class="gallery-grid">
          <div class="gallery-item"
               v-for="(img, i) in images" :key="i"
               :class="{ clickable: !isMobile }"
               :role="isMobile ? null : 'button'"
               :tabindex="isMobile ? null : 0"
               :aria-label="isMobile ? null : `Open larger view: ${img.alt}`"
               @click="maybeOpenLightbox(i)"
               @keyup.enter="maybeOpenLightbox(i)"
               @keyup.space.prevent="maybeOpenLightbox(i)">
            <img
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            />
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div v-if="lightboxIndex !== null && !isMobile" class="lightbox-overlay"
           role="dialog" aria-modal="true" aria-label="Photo viewer"
           @click.self="closeLightbox">
        <div class="lightbox-img-wrapper">
          <img
            class="lightbox-img"
            :src="images[lightboxIndex].src"
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
          src: require('../assets/outlook-pointe-aerial-milton-wv.webp'),
          alt: 'Aerial view of Outlook Pointe Campground showing the graveled lots, the access road and the owners house on site',
        },
        {
          src: require('../assets/outlook-pointe-rv-lots-aerial.webp'),
          alt: 'The graveled RV lots at Outlook Pointe seen from above, with rigs parked along the loop',
        },
        {
          src: require('../assets/outlook-pointe-hillside-milton-wv.webp'),
          alt: 'Outlook Pointe Campground on the hillside above Milton, West Virginia, surrounded by trees and open fields',
        },
        {
          src: require('../assets/outlook-pointe-rv-sites.webp'),
          alt: 'Fifth-wheel trailers parked on the level gravel sites at Outlook Pointe under an open sky',
        },
      ],
      lightboxIndex: null,
      isMobile: false,
      lastFocused: null,
    };
  },
  methods: {
    maybeOpenLightbox(i) {
      if (!this.isMobile) {
        this.openLightbox(i);
      }
    },
    openLightbox(i) {
      this.lastFocused = document.activeElement;
      this.lightboxIndex = i;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', this.handleKeydown);
      this.$nextTick(() => {
        const close = this.$el.querySelector('.lightbox-close');
        if (close) close.focus();
      });
    },
    closeLightbox() {
      this.lightboxIndex = null;
      document.body.style.overflow = '';
      window.removeEventListener('keydown', this.handleKeydown);
      // Send focus back where it came from, otherwise a keyboard user lands
      // at the top of the document every time they close a photo.
      if (this.lastFocused && typeof this.lastFocused.focus === 'function') {
        this.lastFocused.focus();
        this.lastFocused = null;
      }
    },
    trapFocus(e) {
      if (this.lightboxIndex === null) return;
      const close = this.$el.querySelector('.lightbox-close');
      if (!close) return;
      // The dialog holds exactly one focusable control, so the trap is simply
      // to keep focus on it.
      e.preventDefault();
      close.focus();
    },
    handleKeydown(e) {
      if (e.key === 'Tab') this.trapFocus(e);
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
  background-color: var(--bone);
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
  border-radius: var(--r-md);
  aspect-ratio: 16/9;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-speed) ease, transform var(--transition-speed) ease;
  background: var(--surface);
}

.gallery-item:hover {
  box-shadow: var(--shadow-lg);
  z-index: 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--r-md);
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
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-lg);
  background: var(--surface);
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
  color: var(--amber);
  background: rgba(30, 40, 60, 1);
}

/* Vue 3 transition class names. The original used Vue 2's `.fade-enter`, which
   never matched, so the opacity never animated, transitionend never fired, and
   the overlay stayed on screen swallowing clicks after close. */
.gallery-item:focus-visible {
  outline: 3px solid var(--amber);
  outline-offset: 3px;
}

.lightbox-close:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 3px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
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