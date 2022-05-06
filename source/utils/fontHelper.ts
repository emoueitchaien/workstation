import { GlobalTextProps } from '@/interface'

type FontVariantProps = Partial<GlobalTextProps>
export const getFontVariant = (props: FontVariantProps) => {
  return props.fontName + '-' + props.type
}

type FontProps = Partial<GlobalTextProps>
export const getFontSize = (props: FontProps) => {
  switch (props.size) {
    case 'normal':
      return 14
    case 'small':
      return 12
    case 'medium':
      return 16
    case 'large':
      return 20
    default:
      return 16
  }
}
