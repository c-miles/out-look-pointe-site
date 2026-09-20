<template>
  <IconBase :size="size">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </IconBase>
</template>

<script>
import IconBase from './IconBase.vue'

export default {
  name: 'IconHome',
  components: { IconBase },
  props: {
    size: { type: [Number, String], default: 24 },
  },
}
</script>
