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

  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.zimaBlue};
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.zimaBlue};
    border: 2px solid ${({ theme }) => theme.colors.zimaBlue};
    border-radius: 10px;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  a {
    display:block;
    width:100%;
    height:100%;
    color: ${({ theme }) => theme.colors.zimaBlue};
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      color: ${({ theme }) => theme.colors.pastelRed};
    }
  }

  button, input[type="submit"], input[type="reset"] {
    display:block;
    width:100%;
    height:100%;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`
