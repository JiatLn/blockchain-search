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
    <div v-if="loading" my-20 flex="c col">
      <div w-30px h-30px i-eos-icons:bubble-loading />
      <span my-3 class="loading-text">loading . . .</span>
    </div>
    <template v-else>
      <div v-if="blockChain" w-full overflow-auto>
        <TheDetail :block="blockChain" @onChangeHash="onChangeHash" />
        <Transcations :tx-list="blockChain.tx" />
      </div>
      <div v-else flex="c col gap-20px" mt-10>
        <div i-akar-icons:chat-error text="60px" />
        {{ errorMsg?.message || errorMsg }} :(
        <button btn @click="refresh">
          Retry
        </button>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.loading-text {
  animation: color-change 3s infinite;
}

@keyframes color-change {
  0% {
    color: #fb923c;
  }

  25% {
    color: #9333ea;
  }

  50% {
    color: #fb923c;
  }

  75% {
    color: #9333ea;
  }

  100% {
    color: #fb923c;
  }
}
</style>
