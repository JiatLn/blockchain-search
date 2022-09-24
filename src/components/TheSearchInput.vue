<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlockChainStore } from '@/store'

const emit = defineEmits<{
  (e: 'onSearch'): void
}>()

const blockChainStore = useBlockChainStore()
const { blockHash } = storeToRefs(blockChainStore)
</script>

<template>
  <div flex="c col" w="80%" max-w-800px>
    <input v-model="blockHash" v-focus w-full p-2 my-8 rounded border="~ gray-400/50" type="text" placeholder="Input a block hash and keydown enter to search" @keydown.enter="emit('onSearch')">
  </div>
</template>

<style scoped lang="less">

</style>
