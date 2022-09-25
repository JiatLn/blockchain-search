import type { Ref } from 'vue'
import type { IBlockChain } from '@/type'
import { getBlockChainApi } from '@/api/blockchain'
import type { ApiError } from '@/api/types'

export function useBlockChain(blockHash: Ref<string>) {
  const loading = ref<boolean>(false)
  const blockChain = ref<IBlockChain>()
  const errorMsg = ref<ApiError>()
  const refresh = async () => {
    if (!blockHash.value.trim())
      return
    blockChain.value = undefined
    try {
      loading.value = true
      const data = await getBlockChainApi(blockHash.value)
      blockChain.value = data
      const store = useBlockChainStore()
      store.addRecentSearch(data.hash)
    }
    catch (error: any) {
      console.error(error)
      errorMsg.value = error
    }
    finally {
      loading.value = false
    }
  }
  refresh()
  return {
    blockChain,
    errorMsg,
    loading,
    refresh,
  }
}
