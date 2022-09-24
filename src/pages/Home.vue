<script setup lang="ts">
import { getBlockChainApi } from '@/api/blockchain'
import type { IBlockChain } from '@/type'

const blockChain = ref<IBlockChain>()

onMounted(async () => {
  const res = await getBlockChainApi('123')
  blockChain.value = res
})
</script>

<template>
  <div w-full flex="c col">
    blockchain-search
    {{ blockChain }}
  </div>
</template>

<style lang="less" scoped>

</style>
