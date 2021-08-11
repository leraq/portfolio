import { createGlobalStyle } from 'styled-components'
import { ITheme } from '@styles'
import ShareTechMono from './fonts/ShareTechMono-Regular.ttf'

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: 'Share Tech Mono';
    src: url(${ShareTechMono}) format('ttf');
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: ${props => props.theme.background};
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.colors.grey};
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 90vh;
  }
`
