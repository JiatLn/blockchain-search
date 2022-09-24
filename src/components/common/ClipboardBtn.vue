<script setup lang="ts">
const props = defineProps<{
  content: number | string
}>()

const source = computed(() => {
  return `${props.content}`
})
const { copy, isSupported } = useClipboard({ source })

function onClipboard() {
  if (isSupported.value) {
    copy()
    console.log('copy')
  }
  else {
    console.log('not support')
  }
}
</script>

<template>
  <div relative flex="c" class="wrap" py-2>
    <div i-fluent-emoji-flat:clipboard ml-2 cursor-pointer @click="onClipboard" />
    <div absolute bottom="30px" left="50%" w-260px translate-x="-50%" bg="gray-200" rounded-4px px-2 py-1 break-words class="tips" hidden transition="all">
      {{ props.content }}
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap:hover .tips,
.tips:hover {
  display: block;
}
</style>
