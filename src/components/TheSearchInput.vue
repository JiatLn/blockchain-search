<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlockChain } from '@/composables/useBlockChain'
import { useBlockChainStore } from '@/store'

const blockChainStore = useBlockChainStore()
const { blockHash } = storeToRefs(blockChainStore)

const { refresh, blockChain, errorMsg, loading } = useBlockChain(blockHash)
</script>

<template>
  <div flex="c col" w="80%">
    <input v-model="blockHash" v-focus w-full p-2 my-8 rounded border="~ gray-400/50" type="text" placeholder="Input a block hash and keydown enter to search" @keydown.enter="refresh">
    <div v-if="loading" my-20 w-30px h-30px i-eos-icons:bubble-loading />
    <template v-else>
      <div v-if="blockChain" w-full overflow-auto>
        {{ blockChain }}
      </div>
      <div v-else>
        {{ errorMsg }}
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
