<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2>Take a look around</h2>
      <div class="gallery-grid">
        <figure v-for="(photo, i) in photos" :key="photo.src" class="shot" :class="{ 'shot--lead': i === 0 }">
          <!-- A button only when the viewer is on. On phones it's a plain
               div. -->
          <component
            :is="viewerEnabled ? 'button' : 'div'"
            class="shot-frame"
            :type="viewerEnabled ? 'button' : null"
            :aria-label="viewerEnabled ? `Open larger view: ${photo.alt}` : null"
            @click="open(i)"
          >
            <img
              :src="photo.src"
              :alt="photo.alt"
              :width="photo.width"
              :height="photo.height"
              :style="{ objectPosition: photo.position }"
              loading="lazy"
              decoding="async"
            />
          </component>
          <figcaption class="type-small muted">{{ photo.caption }}</figcaption>
        </figure>
      </div>
    </div>

    <!-- On body so no ancestor transform or overflow can trap the fixed
         overlay. -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="current"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          @click.self="close"
        >
          <img class="lightbox-img" :src="current.src" :alt="current.alt" />
          <button ref="closeButton" type="button" class="lightbox-close type-h3" aria-label="Close" @click="close">
            &times;
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script>
import lotsAerial from '../assets/outlook-pointe-rv-lots-aerial.webp'
import aerial from '../assets/outlook-pointe-aerial-milton-wv.webp'
import hillside from '../assets/outlook-pointe-hillside-milton-wv.webp'
import rvSites from '../assets/outlook-pointe-rv-sites.webp'

// Photos are already full width below this, so no viewer.
const VIEWER_QUERY = '(min-width: 769px)'

export default {
  name: 'GallerySection',
  data() {
    return {
      // The first photo is the wide lead.
      photos: [
        {
          src: lotsAerial,
          alt: 'The graveled RV lots at Outlook Pointe seen from above, with rigs parked along the loop',
          caption: 'Level gravel lots, with rigs in for the season.',
          width: 1104, height: 850, position: '50% 40%',
        },
        {
          src: aerial,
          alt: 'Aerial view of Outlook Pointe Campground showing the graveled lots, the access road and the owners house on site',
          caption: 'From above: the gravel road in, and the owners’ house on site.',
          width: 1026, height: 804, position: '50% 55%',
        },
        {
          src: hillside,
          alt: 'Outlook Pointe Campground on the hillside above Milton, West Virginia, surrounded by trees and open fields',
          caption: 'On the hill above Milton, with open ground all around.',
          width: 1104, height: 848, position: '50% 45%',
        },
        {
          src: rvSites,
          alt: 'Fifth-wheel trailers parked on the level gravel sites at Outlook Pointe under an open sky',
          caption: 'Fifth-wheels on the gravel, under a big sky.',
          width: 796, height: 572, position: '50% 60%',
        },
      ],
      openIndex: null,
      viewerEnabled: false,
      lastFocused: null,
    }
  },
  computed: {
    current() {
      return this.openIndex === null ? null : this.photos[this.openIndex]
    },
  },
  mounted() {
    this.viewerQuery = window.matchMedia(VIEWER_QUERY)
    this.syncViewer()
    this.viewerQuery.addEventListener('change', this.syncViewer)
  },
  beforeUnmount() {
    this.viewerQuery.removeEventListener('change', this.syncViewer)
    this.close()
  },
  methods: {
    syncViewer() {
      this.viewerEnabled = this.viewerQuery.matches
      if (!this.viewerEnabled) this.close()
    },
    open(i) {
      if (!this.viewerEnabled) return
      this.lastFocused = document.activeElement
      this.openIndex = i
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', this.onKeydown)
      this.$nextTick(() => this.$refs.closeButton?.focus())
    },
    close() {
      if (this.openIndex === null) return
      this.openIndex = null
      document.body.style.overflow = ''
      window.removeEventListener('keydown', this.onKeydown)
      // Put focus back where it was.
      this.lastFocused?.focus?.()
      this.lastFocused = null
    },
    onKeydown(e) {
      const last = this.photos.length - 1
      if (e.key === 'Escape') this.close()
      else if (e.key === 'ArrowRight') this.openIndex = Math.min(this.openIndex + 1, last)
      else if (e.key === 'ArrowLeft') this.openIndex = Math.max(this.openIndex - 1, 0)
      else if (e.key === 'Tab') {
        // Only one focusable control, so the trap just keeps focus on it.
        e.preventDefault()
        this.$refs.closeButton?.focus()
      }
    },
  },
}
</script>

<style scoped>
.gallery {
  background-color: var(--bone);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-l) var(--grid-gap);
}

.shot {
  margin: 0;
}

.shot--lead {
  grid-column: 1 / -1;
}

.shot-frame {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  overflow: hidden;
  aspect-ratio: var(--ratio-photo);
  border-radius: var(--r-media);
  background: var(--surface);
  box-shadow: var(--elev-rest);
  transition: box-shadow var(--dur-2) var(--ease-out-snap);
}

.shot--lead .shot-frame {
  aspect-ratio: var(--ratio-lead);
}

button.shot-frame {
  cursor: pointer;
}

.shot-frame img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-3) var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  button.shot-frame:hover {
    box-shadow: var(--elev-lifted);
  }

  button.shot-frame:hover img {
    transform: scale(var(--zoom-image));
  }
}

button.shot-frame:active img {
  transform: scale(var(--press-card));
  transition-duration: var(--dur-1);
}

figcaption {
  margin-top: var(--space-2xs);
  max-width: var(--measure-card);
  text-wrap: pretty;
}

.shot--lead figcaption {
  max-width: var(--measure-prose);
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
  display: grid;
  place-items: center;
  padding: var(--gutter);
  background: var(--overlay-bg);
  --focus-color: var(--on-photo);
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  min-height: 0;
  border-radius: var(--r-overlay);
  box-shadow: var(--elev-overlay);
}

.lightbox-close {
  position: absolute;
  top: var(--gutter);
  right: var(--gutter);
  z-index: var(--z-overlay-control);
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  padding: 0;
  border: none;
  border-radius: var(--r-round);
  background: var(--overlay-control-bg);
  color: var(--on-photo);
  line-height: var(--lh-flat);
  box-shadow: var(--elev-overlay);
  cursor: pointer;
  transition: background-color var(--dur-1) var(--ease-out);
}

.lightbox-close:hover {
  background: var(--overlay-control-bg-hover);
}

.fade-enter-active {
  transition: opacity var(--dur-3) var(--ease-out);
}

.fade-leave-active {
  transition: opacity var(--dur-2) var(--ease-in);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .shot-frame {
    aspect-ratio: var(--ratio-photo-mobile);
  }

  .shot--lead .shot-frame {
    aspect-ratio: var(--ratio-lead-mobile);
  }
}
</style>
