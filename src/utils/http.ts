import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { get, merge } from 'lodash-es'

function logout() {
  location.reload()
}

function createInstance() {
  const instance = axios.create()
  instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  )

  instance.interceptors.response.use(
    (response) => {
      const apiData = response.data
      return apiData
    },
    (error) => {
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          logout()
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求地址出错'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP 版本不受支持'
          break
      }
      ElMessage.error(error.message)
      return Promise.reject(error)
    },
  )
  return instance
}

function createRequest(instance: AxiosInstance) {
  return <T>(config: AxiosRequestConfig): Promise<T> => {
    const defaultConfig: AxiosRequestConfig = {
      baseURL: import.meta.env.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      params: {},
      data: {},
      timeout: 0,
      withCredentials: false, //跨域请求时是否携带 Cookies
    }
    const mergeConfig = merge(defaultConfig, config)
    return instance(mergeConfig)
  }
}

const instance = createInstance()

export const request = createRequest(instance)
