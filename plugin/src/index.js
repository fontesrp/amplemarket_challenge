;(() => {
  if (typeof chrome !== 'undefined') {
    // Make it compatible with Safari
    window.browser = chrome
  }

  const manifest = browser.runtime.getManifest()

  const {
    inboxSdk: { apiVersion, appId },
    templates: { iFrameId, iFrameSrc, iconUrl, title }
  } = manifest

  let iFrame

  const getIFrame = () => {
    if (!iFrame) {
      iFrame = document.createElement('iframe')
      iFrame.id = iFrameId
      iFrame.src = iFrameSrc
    }
    return iFrame
  }

  const handleMessage = ({ composeView, data, type }) => {
    switch (type) {
      case 'USE_TEMPLATE':
        composeView.setBodyHTML(data)
        break
      default:
        break
    }
  }

  const onTemplatesButtonClick = evt => {
    const dropdownIFrame = getIFrame()
    evt.dropdown.el.appendChild(dropdownIFrame)
    evt.dropdown.reposition()
    evt.dropdown.on('destroy', () => dropdownIFrame.parentNode?.removeChild?.(dropdownIFrame))
  }

  const onRegisterComposeViewHandler = composeView => {
    const handleIFrameMessage = evt => {
      const { origin: iFrameOrigin } = new URL(iFrameSrc)

      if (evt.origin !== iFrameOrigin) {
        return
      }
      // TODO: treat evt.data

      let message

      try {
        message = JSON.parse(evt.data)
      } catch (_) {
        return
      }

      handleMessage({ composeView, data: message.data, type: message.type })

      getIFrame().contentWindow.postMessage(
        JSON.stringify({ type: `${message.type}-response` }),
        '*'
      )
    }

    window.addEventListener('message', handleIFrameMessage, false)

    composeView.addButton({ hasDropdown: true, iconUrl, onClick: onTemplatesButtonClick, title })

    composeView.on('destroy', () =>
      window.removeEventListener('message', handleIFrameMessage, false)
    )
  }

  InboxSDK.load(apiVersion, appId).then(sdk =>
    sdk.Compose.registerComposeViewHandler(onRegisterComposeViewHandler)
  )
})()
