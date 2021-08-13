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
    font-family: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  p {
    padding: 10px;
  }

  a {
    display:block;
    width:100%;
    height:100%;
  }

  header {
    margin: 0 auto;
  }

  footer {
    margin: 0 auto;
  }
`
