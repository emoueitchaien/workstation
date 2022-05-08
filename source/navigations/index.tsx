import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from '@/navigations/HomeStack'
import SettingStack from '@/navigations/SettingStack'
import { NavigationContainer } from '@react-navigation/native'
import { useDripsyTheme } from 'dripsy'
import AppHeader from './AppHeader'
import { useSelector } from 'react-redux'
import { LanguageProps } from '@/store/language'
import i18next from 'i18next'
import { Platform } from 'react-native'
import MyProfileStack from './MyProfileStack'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  const { theme } = useDripsyTheme()
  const currentLanguage = useSelector(
    (state: { language: LanguageProps }) => state.language.language,
  )
  useEffect(() => {
    i18next.changeLanguage(currentLanguage ?? 'en')
  }, [currentLanguage])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any
            if (route.name === 'HOME') {
              iconName = focused
                ? 'chatbox-ellipses'
                : 'chatbox-ellipses-outline'
            } else if (route.name === 'SETTING') {
              iconName = focused ? 'bookmarks' : 'bookmarks-outline'
            } else if (route.name === 'PROFILE') {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: theme.colors.$bottom,
            ...Platform.select({
              ios: {
                padding: '2%',
                height: '10%',
              },
              android: {
                height: '8%',
              },
            }),
          },
          headerStyle: { backgroundColor: theme.colors.$header },
          headerTitleAlign: 'center',
          headerTitleStyle: { color: theme.colors.$label },
          tabBarShowLabel: false,
          header: props => <AppHeader {...props} />,
        })}
      >
        <Tab.Screen
          options={{
            tabBarBadge: 3,
          }}
          name="HOME"
          component={HomeStack}
        />
        <Tab.Screen name="SETTING" component={SettingStack} />
        <Tab.Screen name="PROFILE" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
