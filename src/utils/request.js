/*
 * @Author: yongming.bai(git: 花裤衩)
 * @Date: 2022-06-30 16:22:24
 * @LastEditors: yongming.bai(git: 花裤衩)
 * @LastEditTime: 2022-07-07 09:00:25
 * @FilePath: /vue-vite-element-admin/src/utils/request.js
 * @Description: axios
 */

import axios from "axios";
import isPlainObject from 'lodash/isPlainObject'
import qs from 'qs'
import { ElMessage as Message } from 'element-plus'
import router from '@/router/index'
import debounce from 'lodash/debounce'

const message = {
  info: debounce(msg => {
    Message.info(msg)
  }, 500),

  warning: debounce(msg => {
    Message.warning(msg)
  }, 500),

  error: debounce(msg => {
    Message.error(msg)
  }, 500),

  success: debounce(msg => {
    Message.success(msg)
  }, 500)
}

const request = axios.create({
  baseURL: import.meta.env.VIE_APP_BASE_URL,
  withCredentials: false, // 跨域是否需要凭证
})

request.interceptors.request.use(
  config => {
    // 默认参数
    let defaults = {}
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        ...{ '_t': new Date().getTime() }
      }
    }

    if(isPlainObject(config.params)) {
      config.params = {
        ...defaults,
        ...config.params
      }
    }

    if(isPlainObject(config.data)) {
      config.data = {
        ...defaults,
        ...config.data
      }
      if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
        config.data = qs.stringify(config.data)
      }
    }
    // sessionStorage.getItem("Token")
    config.headers["Authorization"] = `bearer Token`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * @description: 常规请求
 * @author: yongming.bai(git: 花裤衩)
 * @return {*}
 */
export const createApi = (url, method, data = {}) => {

  let config = {}
  if(method.toLocaleUpperCase() === 'GET') {
    config.params = data
  } else {
    config.data = data
  }
  return request({
    url,
    method,
    ...config
  })
}

/**
 * @description: 表单提交
 * @author: yongming.bai(git: 花裤衩)
 */
export const createFromApi = (url, method, data = {}) => {
  let config = {}
  config.data = data
  config.headers = {'content-type': 'application/x-www-form-urlencoded'}

  return request({
    url,
    method,
    ...config
  })
}

export default request