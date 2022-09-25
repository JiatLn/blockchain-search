<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlockChainStore } from '@/store'
import { formatHash } from '@/utils'

const emit = defineEmits<{
  (e: 'onSearch'): void
}>()

const blockChainStore = useBlockChainStore()
const { blockHash, recentSearches } = storeToRefs(blockChainStore)

function toggle(hash: string) {
  blockHash.value = hash
  emit('onSearch')
}
</script>

<template>
  <div flex="~ col" mx-auto w-full max-w-800px my-8 lt-sm:px-14px>
    <input v-model.trim="blockHash" v-focus w-full p-2 rounded border="~ gray-400/50" type="text" placeholder="Input a block hash and keydown enter to search" @keydown.enter="emit('onSearch')">
    <div v-show="recentSearches.length" mt-4 flex="~ wrap gap-2" items-center>
      <span text="gray-400">Recent Search:</span>
      <span
        v-for="hash in recentSearches" :key="hash" :title="hash"
        rounded p-1 text="14px white dark:#333" transition-all border="~ orange" bg="orange" hover="bg-white text-orange border-orange dark:bg-#333" cursor-pointer
        @click="toggle(hash)">
        {{ formatHash(hash, 4) }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
