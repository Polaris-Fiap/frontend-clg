export const theme = {
  primary: '#42c8f5',
  white: '#ffffff'
}

export type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
