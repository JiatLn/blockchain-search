<script setup lang="ts">
import type { ITx } from '@/type'
import { formatDate, formatFee, formatHash } from '@/utils'

const props = defineProps<{
  txList: ITx[]
}>()

const page = ref(1)
const pageSize = ref(10)
const total = computed(() => props.txList.length)
const pageList = computed(() => {
  return props.txList.slice((page.value - 1) * pageSize.value, page.value * pageSize.value)
})

function onPrevPage() {
  if (page.value > 1) {
    page.value--
  }
}

function onNextPage() {
  if (page.value < Math.ceil(total.value / pageSize.value)) {
    page.value++
  }
}
</script>

<template>
  <div mx-auto max-w-800px pb-30px px-14px>
    <h3 border-b="~ gray-300" pb-2 mb-6>
      Transcations
    </h3>
    <div grid="~ cols-1 gap-5">
      <div
        v-for="(tx, idx) in pageList" :key="tx.hash"
        flex="~" lt-sm:flex-col justify-between border="~ gray-300" rounded-8px p-2>
        <div flex="~ col">
          <div font="mono">
            TX {{ (page - 1) * pageSize + idx }} <span text="gray">· Hash</span> <span text="orange">{{ formatHash(tx.hash, 4) }}</span>
          </div>
          <div text="gray 14px">
            {{ formatDate(tx.time * 1000, 'MM/DD/YYYY, HH:mm:ss') }}
          </div>
        </div>
        <div flex="~ col">
          <div text="14px" font="mono">
            <span text="red">Fee</span> {{ formatFee(tx.fee) }}
          </div>
          <div />
        </div>
      </div>
    </div>
    <div flex="~" items-center justify-between mt-4>
      <button
        dark="text-white! border-white!"
        :disabled="page === 1" :class="{ disabled: page === 1 }"
        class="page-btn" @click="onPrevPage">
        Prev Page
      </button>
      <div text="14px dark:white">
        <span text="orange" font="semibold">{{ page }}</span>
        / {{ Math.ceil(total / pageSize) }}
      </div>
      <button
        dark="text-white! border-white!"
        class="page-btn" :class="{ disabled: page >= Math.ceil(total / pageSize) }"
        :disabled="page >= Math.ceil(total / pageSize)" @click="onNextPage">
        Next Page
      </button>
    </div>
  </div>
</template>

<style scoped lang="less">
.page-btn {
  padding: 4px 8px;
  color: #9333ea;
  font-size: 14px;
  border: 1px solid #9333ea;
  border-radius: 4px;
  transition: all .3s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #9333ea;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: .4;

    &:hover {
      color: #9333ea;
      background-color: transparent;
    }
  }
}
</style>
