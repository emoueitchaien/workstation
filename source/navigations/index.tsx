import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '@/containers/HomePage'
// import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator()

// const DarkTheme = {
//   dark: true,
//   colors: {
//     primary: '#f0f',
//     background: 'grey',
//     card: '#fff',
//     text: '#000',
//     border: '#f00',
//     notification: '#f00',
//   },
// }

// const LightTheme = {
//   dark: false,
//   colors: {
//     primary: '#f0f',
//     background: '#fff',
//     card: '#fff',
//     text: '#000',
//     border: '#f00',
//     notification: '#f00',
//   },
// }

const Navigation = () => {
  //For using device theme scheme
  // const scheme = useColorScheme()
  return (
    <NavigationContainer>
      {/* <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
