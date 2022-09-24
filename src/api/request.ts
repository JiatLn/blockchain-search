import axios from 'axios'

const requests = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30 * 1000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {}
  return config
})

requests.interceptors.response.use(
  (resp) => {
    return Promise.resolve(resp)
  },
  (error: any) => {
    return Promise.reject(error.response.data)
  },
)

export default requests
