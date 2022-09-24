<script setup lang="ts">
import type { IBlockChain } from '@/type'
import { formatBTC, formatDate, formatHash, formatNumber, formatVersion } from '@/utils'

const { block } = defineProps<{
  block: IBlockChain
}>()

const emit = defineEmits<{
  (event: 'onChangeHash', value: string): void
}>()

function onChangeHash(hash: string) {
  emit('onChangeHash', hash)
}
</script>

<template>
  <div mx-auto max-w-800px pb-30px px-14px>
    <div mb-4>
      <div font="bold" text="30px">
        Bitcoin Block #{{ formatNumber(block.block_index) }}
      </div>
      <div text="12px gray-400">
        Mined on {{ formatDate(block.time * 1000, 'MM/DD/YYYY, HH:mm:ss') }}
      </div>
    </div>
    <h3 border-b="~ gray-300" pb-2 mb-6>
      Details
    </h3>
    <div grid="~ cols-2" lt-sm="grid-cols-1">
      <DetailItem prop="Hash">
        <div flex items-center>
          {{ formatHash(block.hash) }}
          <ClipboardBtn :content="block.hash" />
        </div>
      </DetailItem>
      <DetailItem prop="Merkle Root">
        <div flex items-center>
          {{ formatHash(block.mrkl_root, 2) }}
          <ClipboardBtn :content="block.mrkl_root" />
        </div>
      </DetailItem>
      <DetailItem prop="Size">
        {{ formatNumber(block.size) }}
      </DetailItem>
      <DetailItem prop="Version">
        {{ formatVersion(block.ver) }}
      </DetailItem>
      <DetailItem prop="Bits">
        {{ formatNumber(block.bits) }}
      </DetailItem>
      <DetailItem prop="Nonce">
        {{ formatNumber(block.nonce) }}
      </DetailItem>
      <DetailItem prop="Weight">
        {{ formatNumber(block.weight) }} WU
      </DetailItem>
      <DetailItem prop="Height">
        {{ formatNumber(block.height) }}
      </DetailItem>
      <DetailItem prop="Mined on">
        {{ formatDate(block.time * 1000, 'YYYY年MM月DD日 HH:mm:ss') }}
      </DetailItem>
      <DetailItem prop="Median Time">
        {{ formatDate(block.time * 1000, 'YYYY年MM月DD日 HH:mm:ss') }}
      </DetailItem>
      <DetailItem prop="Fees">
        {{ formatBTC(block.fee) }}
      </DetailItem>
      <DetailItem prop="Transactions">
        {{ formatNumber(block.n_tx) }}
      </DetailItem>
    </div>
    <div flex="~" items-center justify-between mt-4>
      <button class="btn" @click="onChangeHash(block.prev_block)">
        Prev Block
      </button>
      <button class="btn" @click="onChangeHash(block.next_block[0])">
        Next Block
      </button>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
