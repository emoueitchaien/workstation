import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ScrollView, useDripsyTheme, View } from 'dripsy'
import { useStyle } from 'react-native-style-utilities'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LoadingProgress from '../LoadingProgress'

type ViewProps = {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  scrollview?: boolean
  loading?: boolean
}
const WrappedView = (props: ViewProps) => {
  const { theme } = useDripsyTheme()
  const { bottom: safeAreaBottom } = useSafeAreaInsets()
  const viewStyle = useStyle(() => ({
    flex: 1,
    backgroundColor: theme.colors.$background,
    // justifyContent: 'center',
    // alignItems: 'center',
  }))
  if (props.scrollview) {
    return (
      <LoadingProgress isLoading={props.loading}>
        <ScrollView
          contentContainerSx={viewStyle}
          scrollEnabled={props.loading ? false : true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: safeAreaBottom }}
          style={[viewStyle, props.style]}
        >
          {props.children}
        </ScrollView>
      </LoadingProgress>
    )
  }
  return (
    <LoadingProgress isLoading={props.loading}>
      <View style={[viewStyle, props.style]}>{props.children}</View>
    </LoadingProgress>
  )
}

export default WrappedView
