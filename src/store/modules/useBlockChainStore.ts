import { defineStore } from 'pinia'

export const useBlockChainStore = defineStore('blockChain', () => {
  const blockHash = ref<string>('0000000000000000086347a715353a7a0b10299edd3cd4916b7137783b110fa3')

  return {
    blockHash,
  }
})
