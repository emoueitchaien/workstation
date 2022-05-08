import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

interface Props {
  isLoading: Boolean | undefined
  children: JSX.Element
}

const LoadingProgress = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        props.children
      )}
    </View>
  )
}

export default LoadingProgress
