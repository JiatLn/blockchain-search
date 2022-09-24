import { defineStore } from 'pinia'

export const useBlockChainStore = defineStore('blockChain', () => {
  const blockHash = ref<string>('000000002c05cc2e78923c34df87fd108b22221ac6076c18f3ade378a4d915e9')

  return {
    blockHash,
  }
})
