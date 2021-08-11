import { createGlobalStyle } from 'styled-components'
import { ITheme } from '@components'

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: ${props => props.theme.background};
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 90vh;
  }
`
