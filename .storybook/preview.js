import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider, BaseStyles } from 'theme-ui'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

import theme from '../styles/theme'


addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <BaseStyles>
      <Story />
    </BaseStyles>
  </ThemeProvider>
))

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})
