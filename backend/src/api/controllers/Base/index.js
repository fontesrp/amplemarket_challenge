import axios from 'axios'

import ApiError from './ApiError'

class Base {
  _treatError(error) {
    if (error?.response) {
      // The request was made and the server responded with a status code that falls
      // out of the range of 2xx
      const { response } = error
      const { data, headers, status } = response || {}
      const message = 'API_RESPONSE'

      throw new ApiError({ data, headers, message, status })
    }

    if (error?.request) {
      // The request was made but no response was received `error.request` is an
      // instance of XMLHttpRequest
      throw new ApiError({ message: 'NETWORK_ERROR' })
    }

    // Something happened in setting up the request that triggered an Error
    throw new ApiError({ message: 'REQUEST_SETTINGS_ERROR' })
  }

  _xhr({ data, headers, method, params, path }) {
    const config = { method, url: path }

    Object.entries({ data, headers, params }).forEach(([prop, value]) => {
      if (value) {
        config[prop] = { ...value }
      }
    })

    if (data && !config.headers?.['Content-Type']) {
      config.headers = { ...(config.headers || {}), 'Content-Type': 'application/json' }
    }

    return axios.request(config).catch(error => this._treatError(error))
  }

  delete(path, params, config) {
    return this._xhr({ method: 'DELETE', params, path, ...(config || {}) })
  }

  get(path, params, config) {
    return this._xhr({ method: 'GET', params, path, ...(config || {}) })
  }

  put(path, data, config) {
    return this._xhr({ data, method: 'PUT', path, ...(config || {}) })
  }

  post(path, data, config) {
    return this._xhr({ data, method: 'POST', path, ...(config || {}) })
  }
}

export default Base
