if (typeof chrome !== 'undefined') {
  // Make it compatible with Safari
  window.browser = chrome
}

const manifest = browser.runtime.getManifest()

const {
  templates: { iFrameId }
} = manifest

const css = `
#${iFrameId} {
  border: 0;
  height: 450px;
  max-height: 100%;
  max-width: 100%;
  width: 360px;
}
`

const injectCss = () => {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  document.head.appendChild(style)
}

if (document.readyState !== 'loading') {
  injectCss()
} else {
  document.addEventListener('DOMContentLoaded', injectCss)
}
