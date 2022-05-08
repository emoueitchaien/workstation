import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '@/containers/HomePage'
// import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="First" component={HomePage} />
    </Stack.Navigator>
  )
}

export default HomeStack
