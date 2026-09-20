<template>
  <IconBase :size="size">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </IconBase>
</template>

<script>
import IconBase from './IconBase.vue'

export default {
  name: 'IconClock',
  components: { IconBase },
  props: {
    size: { type: [Number, String], default: 24 },
  },
}
</script>
