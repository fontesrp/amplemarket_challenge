import axios from 'axios'
import qs from 'qs'

/* eslint-disable no-console */
if (process.env.NODE_ENV === 'development') {
  axios.interceptors.request.use(
    config => {
      console.log('Sending', config?.method, config?.url, config)
      return config
    },
    error => {
      console.log('[ERROR] Request error', error)
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    response => {
      console.log(
        'Got response for',
        response?.config?.method,
        response?.config?.url?.replace(response?.config?.baseURL, ''),
        response
      )
      return response
    },
    error => {
      console.log(
        '[ERROR] Response error',
        error?.config?.method,
        error?.config?.url?.replace(error?.config?.baseURL, ''),
        error
      )
      return Promise.reject(error)
    }
  )
}
/* eslint-enable no-console */

// TODO: replace with consult to package.json
axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.paramsSerializer = params =>
  qs.stringify(params, { arrayFormat: 'comma', encode: false })
axios.defaults.timeout = 3000
