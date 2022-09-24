import useHttp from '@/api/useHttp'
import type { IBlockChain } from '@/type'

export function getBlockChainApi(blockHash: string) {
  return useHttp<IBlockChain>({
    url: `https://blockchain.info/rawblock/${blockHash}`,
    method: 'GET',
  })
}
