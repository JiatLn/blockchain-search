<script setup lang="ts">
import type { ITx } from '@/type'
import { formatDate, formatFee, formatHash } from '@/utils'

const props = defineProps<{
  txList: ITx[]
}>()
</script>

<template>
  <div mx-auto max-w-800px pb-30px px-14px>
    <h3 border-b="~ gray-300" pb-2 mb-6>
      Transcations
    </h3>
    <div grid="~ cols-1 gap-6">
      <div
        v-for="(tx, idx) in props.txList" :key="tx.hash"
        flex="~" items-center justify-between border="~ gray-300" rounded-8px p-2>
        <div flex="~ col">
          <div font="mono">
            TX {{ idx }} <span text="gray">· Hash</span> <span text="orange">{{ formatHash(tx.hash, 4) }}</span>
          </div>
          <div text="gray 14px">
            {{ formatDate(tx.time * 1000, 'MM/DD/YYYY, HH:mm:ss') }}
          </div>
        </div>
        <div flex="~ col">
          <div text="14px" font="mono">
            <span text="red">Fee</span> {{ formatFee(tx.fee) }} Sats
          </div>
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
