export type ITheme = {
  background: string
  colors: IColor
  font: string
}

type IColor = {
  red: string
  blue: string
  yellow: string
  grey: string
}

export const theme = {
  background: '#222',
  colors: {
    red: '',
    blue: '',
    yellow: '',
    grey: '#c8c8c8',
  },
  font: 'Share Tech Mono, Monospace',
}
