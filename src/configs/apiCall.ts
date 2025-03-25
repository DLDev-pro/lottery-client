import { TResponseData, TResponseError } from '@/types/response'
import { API_URL } from '@/utils/constants'
import { autoLogout } from '@/utils/helper'
import { Method } from '@/utils/types'
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  ResponseType,
} from 'axios'

// Lấy API URL từ biến môi trường

export const axiosPublic = axios.create({
  baseURL: API_URL, // Đặt baseURL thành API_URL từ biến môi trường
  withCredentials: true,
})

axiosPublic.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    const accessToken = sessionStorage.getItem('token')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  function (e: AxiosError) {
    console.log(e)
  }
)

axiosPublic.interceptors.response.use(
  function (res: AxiosResponse<TResponseData>) {
    const { data } = res
    if (data.status == 401 || data.status === 401 || data.status === 509) {
      autoLogout()
      return Promise.reject(new Error('Unauthorized or Session Expired'))
    }
    return res
  },
  async function (e: AxiosError<TResponseError>) {
    const { response } = e
    if (response) {
      const {
        data: { message, code, detail },
        status,
      } = response
      if (code == 401 || status === 401 || status === 509) {
        autoLogout()
        return
      }

      return {
        data: {
          message,
          code,
          detail,
        },
      }
    }
    return {
      data: {
        message: 'Internal Server Error',
        code: 500,
      },
    }
  }
)

export const apiCaller = (
  method: Method,
  path: string,
  data?: unknown,
  params?: Record<string, unknown>,
  responseType: ResponseType = 'json'
) => {
  const config: AxiosRequestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${path}`,
    responseType,
    withCredentials: true,
  }

  if (params) {
    config.params = params
  }

  if (data) {
    config.data = data
  }
  return axiosPublic(config)
}

export default apiCaller
