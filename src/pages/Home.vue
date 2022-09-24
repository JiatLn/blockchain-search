<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlockChain } from '@/composables/useBlockChain'
import { useBlockChainStore } from '@/store'

const blockChainStore = useBlockChainStore()
const { blockHash } = storeToRefs(blockChainStore)
const { refresh, blockChain, errorMsg, loading } = useBlockChain(blockHash)

function onChangeHash(hash: string) {
  blockChainStore.blockHash = hash
  refresh()
}
</script>

<template>
  <div w-full flex="c col">
    <TheSearchInput @onSearch="refresh" />
    <div v-if="loading" my-20 w-30px h-30px i-eos-icons:bubble-loading />
    <template v-else>
      <div v-if="blockChain" w-full overflow-auto>
        <TheDetail :block="blockChain" @onChangeHash="onChangeHash" />
      </div>
      <div v-else flex="c col gap-30px">
        {{ errorMsg }}
        <button btn @click="refresh">
          Retry
        </button>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>

</style>
