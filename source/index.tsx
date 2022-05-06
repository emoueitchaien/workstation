import React from 'react'
import { AppState, Platform, StatusBar } from 'react-native'
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from './navigations'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/store'

const MainPage = () => {
  React.useEffect(() => {
    // const appState = AppState.addEventListener('blur', () => {
    //   StatusBar.setBarStyle('dark-content')
    //   if (Platform.OS === 'android') {
    //     StatusBar.setBackgroundColor('rgba(0,0,0,0)')
    //     StatusBar.setTranslucent(true)
    //   }
    // })
    return () => {
      // appState.remove()
    }
  }, [])
  return (
    <>
      <Provider store={store}>
        {/* loading can be Splash Screen to wait for a while */}
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Navigation />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MainPage
