import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import integration from './integration'
import Snippets from './screens/Snippets'
import theme from './theme'

const App = () => {
  useEffect(() => integration.unregister, [])

  return (
    <ThemeProvider theme={theme}>
      <Snippets />
    </ThemeProvider>
  )
}

export default App
