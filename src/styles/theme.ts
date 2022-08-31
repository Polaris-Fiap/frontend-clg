export const theme = {
  lightBlue: '#61c8f8',
  darkGreen: '#071e22',
  cornsilk: '#FFFAE3',
  burnishedBrow: '#A37774',
  deepTaupe: '#7D6167',
  white: '#ffffff',
  cultured: '#F7F7F7'
}

export type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
