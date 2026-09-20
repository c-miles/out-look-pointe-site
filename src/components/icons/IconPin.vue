<template>
  <IconBase :size="size">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </IconBase>
</template>

<script>
import IconBase from './IconBase.vue'

export default {
  name: 'IconPin',
  components: { IconBase },
  props: {
    size: { type: [Number, String], default: 24 },
  },
}
</script>
