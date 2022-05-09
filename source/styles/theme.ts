// theme.ts
import { makeTheme } from 'dripsy'
const darkColors = {
  $background: 'white',
  $text: 'black',
  $header: '#f16725',
  $bottom: '#fad1bd',
  $label: 'white',
  $button: '#229fbe',
}
const themeDark = makeTheme({
  colors: darkColors,
})
type MyTheme = typeof themeDark
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
const lightColors: typeof darkColors = {
  $text: 'white',
  $background: 'black',
  $header: '#fad1bd',
  $bottom: '#f16725',
  $label: 'white',
  $button: '#229fbe',
}
const themeLight = {
  ...themeDark,
  colors: lightColors,
}
export { themeDark, themeLight }
