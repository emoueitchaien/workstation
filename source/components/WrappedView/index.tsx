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
} & typeof defaultProps

const defaultProps = {
  children: <></>,
  style: {},
  scrollview: false,
  loading: false,
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

WrappedView.defaultProps = defaultProps
export default WrappedView
