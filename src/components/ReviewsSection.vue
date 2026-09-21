<template>
  <section id="reviews" class="reviews">
    <div class="container">
      <h2>What guests say</h2>
      <p class="rating-line">
        <span class="figure type-h1 nowrap">{{ ratingText }}</span>
        <span class="type-lede muted">out of 5, from {{ rating.count }} Google reviews</span>
      </p>
      <ul class="quotes ledger auto-grid auto-grid--tight">
        <li v-for="review in reviews" :key="review.author">
          <blockquote>
            <p>&ldquo;{{ review.text }}&rdquo;</p>
          </blockquote>
          <p class="type-small muted">{{ review.author }}</p>
        </li>
      </ul>
      <p class="all-reviews">
        <a :href="site.links.reviews" target="_blank" rel="noopener noreferrer">Read all reviews on Google</a>
      </p>
    </div>
  </section>
</template>

<script>
import { site } from '../data/site'
import { rating } from '../data/rating'
import { reviews } from '../data/reviews'

export default {
  name: 'ReviewsSection',
  data() {
    return { site, rating, reviews }
  },
  computed: {
    // So 5 shows as "5.0".
    ratingText() {
      return this.rating.value.toFixed(1)
    },
  },
}
</script>

<style scoped>
.reviews {
  background-color: var(--bone);
}

h2 {
  margin-bottom: var(--space-s);
}

.rating-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2xs) var(--space-xs);
  max-width: none;
  margin-bottom: var(--space-xl);
}

.rating-line .figure {
  color: var(--forest);
}

.quotes {
  list-style: none;
  margin: 0 0 var(--space-l);
  padding: 0;
}

.quotes li {
  display: grid;
  gap: var(--space-xs);
  align-content: start;
}

blockquote p {
  margin: 0;
  max-width: var(--measure-card);
}

.quotes li > p {
  margin: 0;
}

.all-reviews {
  margin: 0;
}

.all-reviews a {
  color: var(--forest);
  text-underline-offset: var(--space-3xs);
}
</style>
