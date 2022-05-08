export interface GlobalTextProps {
  size?: 'small' | 'medium' | 'large' | 'normal'
  color?: string
  style?: any
  children?: any
  type?:
    | 'Bold'
    | 'BoldItalic'
    | 'ExtraBold'
    | 'ExtraBoldItalic'
    | 'Italic'
    | 'Light'
    | 'LightItalic'
    | 'Medium'
    | 'MediumItalic'
    | 'Regular'
    | 'SemiBold'
    | 'SemiBoldItalic'
  fontName?: string
}
export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  role: string
}
