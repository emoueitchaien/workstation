import React from 'react'
import { Text } from 'dripsy'
import { colors } from '@/styles/colors'
import { useStyle } from 'react-native-style-utilities'
import { getFontSize, getFontVariant } from '@/utils/fontHelper'
import { GlobalTextProps } from '@/interface'

export function SuperText({
  size = 'normal',
  type = 'Regular',
  color,
  fontName = 'OpenSans',
  ...props
}: GlobalTextProps): React.ReactElement {
  const customStyle = useStyle(
    () => ({
      fontFamily: getFontVariant({ fontName, type }),
      fontSize: getFontSize({ size }),
      color: color,
    }),
    [size, type, color, fontName],
  )
  return (
    // eslint-disable-next-line react/forbid-elements
    <Text
      selectionColor={colors.primary}
      ellipsizeMode="tail"
      // numberOfLines={1}
      style={customStyle}
      {...props}
    />
  )
}
