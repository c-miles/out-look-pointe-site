<template>
  <IconBase :size="size">
    <polyline points="6 9 12 15 18 9"/>
  </IconBase>
</template>

<script>
import IconBase from './IconBase.vue'

export default {
  name: 'IconChevronDown',
  components: { IconBase },
  props: {
    size: { type: [Number, String], default: 24 },
  },
}
</script>
