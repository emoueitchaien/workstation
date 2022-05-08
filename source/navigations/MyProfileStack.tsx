import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Setting from '@/containers/Settings'
import MyProfile from '@/containers/MyProfile'
// import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Third" component={MyProfile} />
    </Stack.Navigator>
  )
}

export default MyProfileStack
