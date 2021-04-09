class Integration {
  constructor() {
    this._listeners = []
    window.addEventListener('message', this._handleWindowMessage, false)
  }

  _handleWindowMessage = evt => {
    let message

    try {
      message = JSON.parse(evt.data)
    } catch (error) {
      return
    }

    const listenerIdx = this._listeners.findIndex(({ type }) => `${type}-response` === message.type)

    if (listenerIdx >= 0) {
      const [listener] = this._listeners.splice(listenerIdx, 1)
      listener.resolve(message.data)
    }
  }

  sendToParent({ data, type }) {
    return new Promise(resolve => {
      this._listeners.push({ resolve, type })
      window.top.postMessage(JSON.stringify({ data, type }), '*')
    })
  }

  unregister = () => {
    this._listeners = []
    window.removeEventListener('message', this._handleWindowMessage, false)
  }
}

export default new Integration()
