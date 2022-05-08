import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Setting from '@/containers/Settings'
// import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator()

const SettingSatck = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Second" component={Setting} />
    </Stack.Navigator>
  )
}

export default SettingSatck
