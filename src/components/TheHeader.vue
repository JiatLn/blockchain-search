<script setup lang="ts">
const isDark = useDark()
const toggle = useToggle(isDark)

function toGithub() {
  window.open('https://github.com/JiatLn/blockchain-search', '_blank')
}
</script>

<template>
  <div font-mono p="x4 y2" border-b="~ gray-400/40" flex items-center justify-between>
    <span text="xl">BlockChain App</span>
    <div text="xl" flex="c gap-20px">
      <div i-carbon-logo-github cursor="pointer" @click="toGithub()" />
      <div i-carbon-sun dark:i-carbon-moon cursor="pointer" @click="toggle()" />
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
