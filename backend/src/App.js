import React from 'react'

import { ThemeProvider } from 'styled-components'

import Snippets from './screens/Snippets'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Snippets />
  </ThemeProvider>
)

export default App
