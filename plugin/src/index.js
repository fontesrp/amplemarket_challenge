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
  }

  window.addEventListener('message', handleIFrameMessage, false)

  composeView.addButton({ hasDropdown: true, iconUrl, onClick: onTemplatesButtonClick, title })

  composeView.on('destroy', () => window.removeEventListener('message', handleIFrameMessage, false))
}

InboxSDK.load(apiVersion, appId).then(sdk =>
  sdk.Compose.registerComposeViewHandler(onRegisterComposeViewHandler)
)
