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
    background-color: ${({ theme }) => theme.background};
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  main {
    min-height: 100vh;
  }

  a {
    color: ${({ theme }) => theme.colors.lightGrey};
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.zimaBlue};
    }

`
