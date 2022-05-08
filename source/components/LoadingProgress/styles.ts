import metrics from '@/styles/metrics'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loadingIndicator: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
})

export default styles
