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

  let editing
  let iFrame

  const getIFrame = () => {
    if (!iFrame) {
      iFrame = document.createElement('iframe')
      iFrame.id = iFrameId
      iFrame.src = iFrameSrc
    }

    if (!iFrame.parentNode) {
      const src = new URL(iFrameSrc)

      if (editing?.id) {
        src.searchParams.append('editing', true)
        src.searchParams.append('id', editing.id)
        src.searchParams.append('page', editing.page)
      }

      iFrame.src = src.toString()
    }

    return iFrame
  }

  const handleMessage = ({ composeView, data, type }) => {
    let responseData

    switch (type) {
      case 'EDIT_TEMPLATE':
        editing = { id: data.id, page: data.page }
        composeView.setBodyHTML(data.body)
        break
      case 'EDIT_TEMPLATE_FINISH':
        editing = {}
        break
      case 'EDIT_GET_BODY':
      case 'GET_BODY':
        responseData = composeView.getHTMLContent()
        break
      case 'USE_TEMPLATE':
        composeView.setBodyHTML(data)
        break
      default:
        break
    }

    getIFrame().contentWindow.postMessage(
      JSON.stringify({ data: responseData, type: `${type}-response` }),
      '*'
    )
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

      let message

      try {
        message = JSON.parse(evt.data)
      } catch (_) {
        return
      }

      handleMessage({ composeView, data: message.data, type: message.type })
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
