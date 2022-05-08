/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { useDripsyTheme, View } from 'dripsy'
import { SuperText } from '@/components/SuperText'
import { useStyle } from 'react-native-style-utilities'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { changeLanguage, LanguageProps } from '@/store/language'
import { useDispatch, useSelector } from 'react-redux'

const AppHeader = (props: BottomTabHeaderProps) => {
  const { theme } = useDripsyTheme()
  const dispatch = useDispatch()
  const currentLanguage = useSelector(
    (state: { language: LanguageProps }) => state.language.language,
  )
  const headerStyle = useStyle(
    () => ({
      backgroundColor: theme.colors.$header,
      height: 80,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingBottom: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
    }),
    [theme],
  )
  const switchLanguage = (type: 'en' | 'np') => {
    dispatch(changeLanguage({ language: type }))
  }
  return (
    <View style={headerStyle}>
      <View />
      <SuperText type="Bold" size="large">
        {props.route.name}
      </SuperText>
      <TouchableOpacity
        onPress={() => switchLanguage(currentLanguage === 'en' ? 'np' : 'en')}
      >
        <Ionicons
          size={30}
          name={currentLanguage === 'en' ? 'language' : 'ios-globe'}
        />
      </TouchableOpacity>
    </View>
  )
}
export default AppHeader
