<script setup lang="ts">
const props = defineProps<{
  prop: string
}>()
</script>

<template>
  <div flex="~" items-center>
    <div w-160px>
      {{ props.prop }}
    </div>
    <div flex-1 text="gray" font="mono">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
