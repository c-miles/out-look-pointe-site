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
  padding: var(--section-y) 0;
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
  gap: var(--grid-gap);
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-media);
  aspect-ratio: 16/9;
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--dur-2) var(--ease-out-snap),
              transform var(--dur-2) var(--ease-out-snap);
  background: var(--surface);
}

@media (hover: hover) and (pointer: fine) {
  .gallery-item:hover {
    box-shadow: var(--shadow-lg);
    z-index: var(--z-raised);
  }
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-3) var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .gallery-item:hover img {
    transform: scale(var(--zoom-image));
  }
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
  height: 100dvh !important;
  background: var(--overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-overlay);
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
  border-radius: var(--r-overlay);
  box-shadow: var(--elev-overlay);
  background: var(--surface);
}

.lightbox-close {
  position: absolute;
  top: var(--space-2xs);
  right: var(--space-2xs);
  width: var(--control-md);
  height: var(--control-md);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--overlay-control-bg);
  color: var(--on-photo);
  border: none;
  border-radius: var(--r-round);
  font-size: var(--fs-h3);
  line-height: var(--lh-flat);
  box-shadow: var(--elev-overlay);
  cursor: pointer;
  z-index: var(--z-overlay-control);
  transition: background-color var(--dur-1) var(--ease-out);
}
.lightbox-close:hover {
  background: var(--overlay-control-bg-hover);
}

.gallery-item.clickable:active {
  transform: scale(var(--press-card));
  transition-duration: var(--dur-1);
}

.gallery-item:focus-visible {
  outline: var(--focus-ring) solid var(--amber);
  outline-offset: var(--focus-ring);
}

.lightbox-close:focus-visible {
  outline: var(--focus-ring) solid var(--on-photo);
  outline-offset: var(--focus-ring);
}

/* Vue 3 transition class names. The original used Vue 2's `.fade-enter`, which
   matches nothing in Vue 3, so the overlay appeared instantly instead of fading
   in. Closing always worked: `.fade-leave-to` is valid in both versions. */
.fade-enter-active {
  transition: opacity var(--dur-3) var(--ease-out);
}
.fade-leave-active {
  transition: opacity var(--dur-2) var(--ease-in);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>