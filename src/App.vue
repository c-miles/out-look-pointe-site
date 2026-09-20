<template>
  <div id="app">
    <HeroSection />
    <FeaturesSection />
    <GallerySection />
    <RatesSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import GallerySection from './components/GallerySection.vue'
import RatesSection from './components/RatesSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    FeaturesSection,
    GallerySection,
    RatesSection,
    ContactSection
  },
  mounted() {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, {
      // A threshold on a tall section fires when almost nothing is visible.
      // A bottom root margin is independent of element height.
      threshold: 0,
      rootMargin: '0px 0px -12% 0px'
    })

    // Observe all sections except the footer
    const animated = [...document.querySelectorAll('section:not(.contact-section)')]
    animated.forEach(section => {
      section.classList.add('scroll-animate')
      observer.observe(section)
    })

    // Safety net. The hidden state is applied by JS, so a script failure leaves
    // the page visible. But if the script runs and the observer then never
    // fires, the content would stay at opacity 0 with no way back. Reveal
    // everything unconditionally after a short delay; by then a working
    // observer has already done its job and this is a no-op.
    this.revealFallback = window.setTimeout(() => {
      animated.forEach(section => {
        section.classList.add('animate-in')
        observer.unobserve(section)
      })
    }, 3000)
  },
  beforeUnmount() {
    window.clearTimeout(this.revealFallback)
  }
}
</script>

<style>
/* Two variable fonts, both SIL OFL (licences sit beside the files in
   public/fonts). One file per family covers every weight, and Archivo also
   carries a width axis, which is where the display contrast comes from: same
   family of forms as the body, but wider and heavier, like sign lettering. */
@font-face {
  font-family: 'Archivo';
  src: url('/fonts/Archivo-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-stretch: 62% 125%;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Public Sans';
  src: url('/fonts/PublicSans-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Palette sampled from the campground photographs: tree canopy, the gravel
   access road, and sky haze. The amber is wayfinding, used for calls to
   action and nothing else. */
:root {
  --forest: #1E3A2B;
  --forest-deep: #142619;
  --bone: #F6F5F2;
  --gravel: #6F6859;
  --ink: #1A1D1A;
  --amber: #D04710;
  --amber-hover: #C2410C;
  --surface: #FFFFFF;
  --hairline: #DEDAD2;
  --on-accent: #FFFFFF;

  /* A deep panel reads as a panel in both schemes, so it does not invert the
     way --forest does. --forest is a text colour; this is a background. */
  --panel: #1E3A2B;
  --panel-hairline: #33543F;
  --on-panel: #F6F5F2;
  --on-panel-muted: #C4D2C7;

  --font-display: 'Archivo', system-ui, -apple-system, sans-serif;
  --font-body: 'Public Sans', system-ui, -apple-system, sans-serif;

  /* Width is the display axis. Expanded for the one hero line, slightly wide
     for section headings, normal everywhere else. */
  --width-display: 125%;
  --width-heading: 112%;
  --width-normal:  100%;

  /* Radius by role. This is a site about land and a view, which is editorial
     territory; 10px and 18px were consumer-app values. A photograph is a
     window, and a heavy radius turns it into a sticker. */
  --r-media:   3px;
  --r-control: 6px;
  --r-card:    8px;
  --r-overlay: 12px;
  --r-round:   999px;

  --spacing-unit: 1rem;

  /* ---- TYPE SCALE ------------------------------------------------------
     Two ratios, not one: 1.2 at 375px so headings do not blow out a phone,
     1.333 at 1280px so the display has room to be a display. Every preferred
     value carries a rem term, which is what keeps browser zoom working; a
     bare vw is W3C failure F94 against WCAG 1.4.4.
       slope = (max - min) / (1280 - 375);  y = min - slope * 375
  --------------------------------------------------------------------- */
  --fs-caption: clamp(0.8438rem, 0.8049rem + 0.166vw, 0.9375rem);
  --fs-small:   clamp(0.9375rem, 0.8857rem + 0.221vw, 1.0625rem);
  --fs-body:    clamp(1.0625rem, 1.0107rem + 0.221vw, 1.1875rem);
  --fs-lede:    clamp(1.2813rem, 1.1650rem + 0.497vw, 1.5625rem);
  --fs-h3:      clamp(1.5313rem, 1.2851rem + 1.050vw, 2.1250rem);
  --fs-h2:      clamp(1.8438rem, 1.4420rem + 1.713vw, 2.8125rem);
  --fs-h1:      clamp(2.1875rem, 1.5399rem + 2.762vw, 3.7500rem);
  --fs-display: clamp(2.6250rem, 1.6409rem + 4.199vw, 5.0000rem);

  /* Leading falls as size rises, and tightens again on a narrow measure. */
  --lh-display: 1.02;
  --lh-h1:      1.06;
  --lh-h2:      1.14;
  --lh-h3:      1.24;
  --lh-lede:    1.45;
  --lh-body:    1.6;
  --lh-narrow:  1.5;
  --lh-caption: 1.4;

  /* Tracking is a curve against size, not a constant. The two largest steps
     use fluid px so they are correct at both ends of a 2x size range; a single
     em value would be wrong at one end. */
  --ls-display: clamp(-2.8px, 0.029px - 0.221vw, -0.8px);
  --ls-h1:      clamp(-0.9px, -0.073px - 0.0646vw, -0.315px); /* expanded cut: half the usual tightening */
  --ls-h2:      -0.022em;
  --ls-h3:      -0.015em;
  --ls-lede:    -0.011em;
  --ls-body:     0em;
  --ls-caption:  0.01em;
  --ls-eyebrow:  0.1em;
  --ls-button:   0.08em;

  /* Measure per role. The container is a layout constraint and must never
     become the measure: at 1200px a paragraph runs past 110 characters.

     These are CALIBRATED, not nominal. The ch unit is the advance width of
     the zero glyph, which in Public Sans is 0.612em while a real average
     character is 0.460em. So ch overstates a line by about 1.33x. Measured in
     the browser, not assumed: target characters multiplied by 0.752.

     If the body typeface changes, RE-MEASURE. The factor is font specific; it
     was 0.642 under the previous face, and carrying that over would have set
     every line about 15% short. */
  --measure-display: 11ch;   /* ~14 characters */
  --measure-heading: 18ch;   /* ~24 */
  --measure-lede:    36ch;   /* ~48 */
  --measure-prose:   50ch;   /* ~66 */
  --measure-card:    35ch;   /* ~46 */

  /* ---- SPACING ---------------------------------------------------------
     8pt grid with 4px half steps below 16px. Linear at the small end where
     4px is visible, roughly 1.5x at the layout end where you need real jumps.
  --------------------------------------------------------------------- */
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs:  0.75rem;
  --space-s:   1rem;
  --space-m:   1.5rem;
  --space-l:   2rem;
  --space-xl:  3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;

  /* Role tokens. Components reference these, never the raw scale, so density
     is one edit in one place instead of a grep across five files. */
  --section-y:       clamp(2rem,   1.296rem + 3.005vw, 4rem);
  --section-y-loose: clamp(3rem,   1.944rem + 4.507vw, 6rem);
  --gutter:          clamp(1rem,   0.648rem + 1.502vw, 2rem);
  --card-pad:        clamp(1.25rem, 0.986rem + 1.127vw, 2rem);
  --grid-gap:        clamp(0.75rem, 0.486rem + 1.127vw, 1.5rem);
  --heading-gap:     clamp(1.5rem, 0.972rem + 2.254vw, 3rem);

  --container:        70rem;
  --container-narrow: 45rem;

  --measure-tagline: 42ch;      /* ~56 characters; the hero subhead is 49 */
  --heading-margin-after: 0.4em; /* em on purpose: scales with the heading */

  /* Five positions. 500 and 600 are where emphasis can happen without
     shouting; a 400/700 binary has no way to say "label" or "button". */
  --fw-regular: 400;   /* body */
  --fw-medium:  500;   /* labels, captions that need presence */
  --fw-semi:    600;   /* buttons, card titles, prices */
  --fw-bold:    700;   /* h2, h3 */
  --fw-display: 800;   /* h1 only */

  --lh-flat: 1;   /* single glyph controls, e.g. the lightbox close */

  /* Controls and icons */
  --control-lg: 3rem;
  --control-md: 2.5rem;
  --icon-lg:    2rem;
  --icon-md:    1.75rem;
  --bullet:     var(--space-2xs);
  --card-min:   18rem;      /* narrowest a card may get before the grid wraps */
  --chip-min:   6.75rem;    /* contact chips */
  --border-hair: 1px;
  --focus-ring: 3px;

  /* Fixed-contrast colours. Content over a photograph or inside the lightbox
     does not theme: the backdrop is always dark, so these never invert. */
  --on-photo: #FFFFFF;
  --hero-grade:
    linear-gradient(180deg,
      rgb(12 14 12 / 0.10) 0%,
      rgb(12 14 12 / 0.10) 72%,
      rgb(12 14 12 / 0.20) 100%);
  --text-halo-display:
    0 1px 2px rgb(0 0 0 / 0.35),
    0 2px 10px rgb(0 0 0 / 0.275),
    0 6px 28px rgb(0 0 0 / 0.225);
  --text-halo-body:
    0 1px 1px rgb(0 0 0 / 0.45),
    0 1px 4px rgb(0 0 0 / 0.40),
    0 2px 10px rgb(0 0 0 / 0.325),
    0 4px 24px rgb(0 0 0 / 0.25);
  /* Was rgba(30, 40, 60), the old slate blue, long after the palette moved. */
  --overlay-bg:               rgb(10 16 11 / 0.92);
  --overlay-control-bg:       rgb(10 16 11 / 0.80);
  --overlay-control-bg-hover: rgb(10 16 11);
  --panel-hover:  rgb(255 255 255 / 0.08);
  --panel-active: rgb(255 255 255 / 0.14);

  --opacity-muted: 0.8;

  /* One z scale instead of 2, 1001 and 99999 !important. */
  --z-raised:          2;
  --z-overlay:         1000;
  --z-overlay-control: 1001;


  /* Entrances decelerate, exits accelerate. Using one curve for both is the
     single most common motion mistake in templates. */
  --ease-out:      cubic-bezier(0.33, 1, 0.68, 1);
  --ease-out-snap: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:       cubic-bezier(0.32, 0, 0.67, 0);

  --dur-1: 120ms;  /* colour, border, opacity on small controls */
  --dur-2: 180ms;  /* hover lift, icon state */
  --dur-3: 260ms;  /* overlay fade, image scale */
  --dur-4: 420ms;  /* section scroll reveal */

  --reveal-distance: 16px;

  /* Distances and scales for hover and press, so every lift agrees. */
  --lift-control: 2px;
  --lift-card:    3px;
  --press-control: 0.985;
  --press-card:    0.99;
  --zoom-image:    1.03;

  --transition-speed: var(--dur-2);

  /* Shadows are tinted with the ink hue rather than pure black. */
  --card-border: 1px solid var(--hairline);
  --shade: 152deg 24% 10%;

  --elev-rest:
    0 0 0 1px hsl(var(--shade) / 0.08);
  --elev-raised:
    0 0 0 1px hsl(var(--shade) / 0.07),
    0 1px 2px -1px hsl(var(--shade) / 0.10),
    0 3px 6px -3px hsl(var(--shade) / 0.08);
  --elev-lifted:
    0 0 0 1px hsl(var(--shade) / 0.08),
    0 2px 4px -2px hsl(var(--shade) / 0.10),
    0 8px 16px -6px hsl(var(--shade) / 0.10);
  --elev-overlay:
    0 0 0 1px hsl(var(--shade) / 0.10),
    0 4px 8px -4px hsl(var(--shade) / 0.10),
    0 20px 40px -12px hsl(var(--shade) / 0.18);

  --shadow-sm: var(--elev-rest);
  --shadow-md: var(--elev-raised);
  --shadow-lg: var(--elev-lifted);
}

/* The expanded cut is wide by design, and font-stretch cannot be made fluid
   with clamp (it will not mix vw into a percentage). So the token steps down
   once. Measured: at 125% the first hero line is 315px, which fits a 360px
   phone but breaks into three lines at 320px. At 106% it is 269px and fits
   everywhere. Set on the token so no component needs its own override. */
@media (max-width: 400px) {
  :root {
    --width-display: 106%;
    --width-heading: 104%;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --forest: #8FB89B;
    --forest-deep: #0E1811;
    --bone: #14170F;
    --surface: #1B1F19;
    --ink: #EDEAE2;
    --gravel: #A39B8B;
    --hairline: #2E332B;
    --amber: #D04710;
    --amber-hover: #C2410C;
    --on-accent: #FFFFFF;

    --panel: #1B2C21;
    --panel-hairline: #2F4638;
    --on-panel: #E8EDE6;
    --on-panel-muted: #A8BCAE;

    --surface-hover: #232820;
    --hairline-raised: #3B4239;

    --elev-rest:
      0 0 0 1px var(--hairline);
    --elev-raised:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.05),
      0 0 0 1px var(--hairline),
      0 2px 6px -2px hsl(0deg 0% 0% / 0.40);
    --elev-lifted:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.07),
      0 0 0 1px var(--hairline-raised),
      0 6px 16px -4px hsl(0deg 0% 0% / 0.50);
    --elev-overlay:
      inset 0 1px 0 hsl(90deg 20% 96% / 0.08),
      0 0 0 1px var(--hairline-raised),
      0 16px 40px -8px hsl(0deg 0% 0% / 0.65);

    --shadow-sm: var(--elev-rest);
    --shadow-md: var(--elev-raised);
    --shadow-lg: var(--elev-lifted);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-variant-numeric: lining-nums proportional-nums;
  color: var(--ink);
  background-color: var(--bone);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

h1, h2, h3 {
  font-family: var(--font-display);
  color: var(--forest);
  text-wrap: balance;
  /* No measure cap on headings. Measure is a prose concern: headings are short
     by nature and balance already shapes them. A cap here did three bad things
     at once. It made the box narrower than a centred card, and since a block
     with max-width does not centre itself the title sat flush left. It forced
     the hero headline to wrap at any viewport, because a ch cap is deliberately
     viewport independent. And it wrapped some card titles but not others, which
     read as uneven. Prose keeps its cap, on p. */
  /* Asymmetric: a heading belongs to the text below it, so it takes far more
     space above than below. Equal margins on every level is the templated
     signature, and it leaves every heading floating equidistant. */
  margin-block: 0 var(--heading-margin-after);
}

h1 {
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);
  letter-spacing: var(--ls-h1);
  font-weight: var(--fw-display);
  font-stretch: var(--width-display);
}

h2 {
  font-size: var(--fs-h2);
  line-height: var(--lh-h2);
  letter-spacing: var(--ls-h2);
  font-weight: var(--fw-bold);
  font-stretch: var(--width-heading);
  margin-block-start: 0;
  margin-block-end: var(--heading-gap);
}

h3 {
  font-size: var(--fs-h3);
  line-height: var(--lh-h3);
  letter-spacing: var(--ls-h3);
  font-weight: var(--fw-bold);
}

p {
  /* Opt out, not opt in. The container caps layout width, not measure. */
  max-width: var(--measure-prose);
  margin-block-end: 0.85em;
  text-wrap: pretty;
}

section {
  padding-block: var(--section-y);
}

/* A range or a measurement is one unit of meaning and must not break across
   lines: "35-" on one line and "50 amp" on the next reads as a typo. */
.nowrap {
  white-space: nowrap;
}

/* Scroll Animation Styles */
.scroll-animate {
  opacity: 0;
  transform: translateY(var(--reveal-distance));
  transition: opacity var(--dur-4) var(--ease-out),
              transform var(--dur-4) var(--ease-out);
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}


/* The scroll reveal ran unconditionally. Anyone who has asked their OS to
   reduce motion was getting it anyway. */
@media (prefers-reduced-motion: reduce) {
  :root {
    --reveal-distance: 0px;
    --dur-4: 80ms;
  }

  .scroll-animate,
  .animate-in {
    opacity: 1 !important;
    transform: none !important;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

</style>
