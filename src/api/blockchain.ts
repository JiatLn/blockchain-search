import useHttp from '@/api/useHttp'
import type { IBlockChain } from '@/type'

export function getBlockChainApi(hashId: string) {
  return useHttp<IBlockChain>({
    url: `https://blockchain.info/rawblock/${hashId}`,
    method: 'GET',
  })
}
