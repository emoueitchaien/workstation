import React from 'react'
import { AppState, Platform, StatusBar, useColorScheme } from 'react-native'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from '@/navigations/index'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/store'
import { DripsyProvider } from 'dripsy'
import { themeDark, themeLight } from '@/styles/theme'

const MainPage = () => {
  React.useEffect(() => {
    const appState = AppState.addEventListener('focus', () => {
      StatusBar.setBarStyle('dark-content')
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('rgba(0,0,0,0)')
        StatusBar.setTranslucent(true)
      }
    })
    return () => {
      appState.remove()
    }
  }, [])

  const colorMode = useColorScheme()
  return (
    <>
      <Provider store={store}>
        {/* loading can be Splash Screen to wait for a while */}
        <PersistGate loading={null} persistor={persistor}>
          <DripsyProvider theme={colorMode === 'dark' ? themeDark : themeLight}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <Navigation />
            </SafeAreaProvider>
          </DripsyProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MainPage
