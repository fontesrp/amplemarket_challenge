const css = `
#iframe_amplemarket_challenge {
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
