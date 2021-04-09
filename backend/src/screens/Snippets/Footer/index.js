import React from 'react'

import Create from './Create'
import Manage from './Manage'
import { Section, Separator } from './styles'

const Footer = () => (
  <Section>
    <Create />
    <Separator />
    <Manage />
  </Section>
)

export default Footer
