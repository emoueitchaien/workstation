import React from 'react'
import { useStyle } from 'react-native-style-utilities'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useDripsyTheme } from 'dripsy'
import { SuperText } from '@/components/SuperText'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  size?: 'normal' | 'large'
  color?: string
  children?: React.ReactNode
}

export function SuperButton({
  title = 'Press Me',
  size = 'normal',
  color,
  ...props
}: ButtonProps): React.ReactElement {
  const { colors } = useDripsyTheme().theme
  const customStyle = useStyle(
    () => ({
      backgroundColor: color,
      width: size === 'normal' ? '70%' : '100%',
      padding: size === 'normal' ? 8 : 16,
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [color, size],
  )
  return (
    <TouchableOpacity activeOpacity={0.5} style={customStyle} {...props}>
      <SuperText color={colors.$label}>{title}</SuperText>
    </TouchableOpacity>
  )
}
