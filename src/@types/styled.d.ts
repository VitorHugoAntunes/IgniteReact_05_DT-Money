import { defaultTheme } from '../styles/themes/default'

// Redefinindo o tema padrao do styled components

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
