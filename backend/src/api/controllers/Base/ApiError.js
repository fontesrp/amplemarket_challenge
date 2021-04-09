class ApiError extends Error {
  constructor({ data, message, fileName, headers, lineNumber, status }) {
    super(message, fileName, lineNumber)

    this.data = data
    this.headers = headers
    this.status = status

    const { logref, message: apiMessage } = data?.[0] || {}

    this.logref = logref || ''
    this.apiMessage = apiMessage || ''
  }
}

export default ApiError
