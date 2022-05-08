/* eslint-disable react/require-default-props */
import React from 'react'
import { useDripsyTheme, View } from 'dripsy'
import { SuperText } from '@/components/SuperText'
import { useStyle } from 'react-native-style-utilities'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

interface Props extends BottomTabHeaderProps {
  rightComponent?: React.ReactNode
  leftComponent?: React.ReactNode
}

const AppHeader = (props: Props) => {
  const { theme } = useDripsyTheme()
  const headerStyle = useStyle(
    () => ({
      backgroundColor: theme.colors.$header,
      height: 80,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 10,
    }),
    [theme],
  )
  return (
    <View style={headerStyle}>
      <SuperText type="Bold" size="large">
        {props.route.name}
      </SuperText>
    </View>
  )
}
export default AppHeader
