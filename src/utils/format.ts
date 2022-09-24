export function round(num: number, precision = 2) {
  return Math.round(num * 10 ** precision) / 10 ** precision
}

export function formatHash(hash: string, size = 5) {
  const len = hash.length
  return `${hash.slice(0, size)}-${hash.slice(len - size, len)}`
}

export function formatNumber(num: number) {
  return num.toLocaleString()
}

export function formatVersion(ver: number) {
  return `0x${ver.toString(16)}`
}

export function formatBTC(val: number) {
  return `${(val / 100000000).toFixed(8)} BTC`
}

export function formatFee(num: number) {
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num
}
