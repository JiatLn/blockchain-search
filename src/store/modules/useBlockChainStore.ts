import { defineStore } from 'pinia'

export const useBlockChainStore = defineStore('blockChain', () => {
  const blockHash = ref<string>('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')

  return {
    blockHash,
  }
})
