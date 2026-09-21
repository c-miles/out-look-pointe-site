<template>
  <div id="app">
    <HeroSection />
    <main>
      <AtAGlanceSection />
      <GallerySection />
      <FeaturesSection />
      <RigFitSection />
      <WhatsHereSection />
      <RatesSection />
      <ReviewsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import AtAGlanceSection from './components/AtAGlanceSection.vue'
import GallerySection from './components/GallerySection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import RigFitSection from './components/RigFitSection.vue'
import WhatsHereSection from './components/WhatsHereSection.vue'
import RatesSection from './components/RatesSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { startScrollReveal } from './utils/scrollReveal'
import { refreshRating } from './data/rating'

export default {
  name: 'App',
  components: {
    HeroSection,
    AtAGlanceSection,
    GallerySection,
    FeaturesSection,
    RigFitSection,
    WhatsHereSection,
    RatesSection,
    ReviewsSection,
    ContactSection,
    SiteFooter
  },
  mounted() {
    refreshRating()
    this.stopReveal = startScrollReveal(this.$el.querySelectorAll('main > section'))
  },
  beforeUnmount() {
    this.stopReveal()
  }
}
</script>
