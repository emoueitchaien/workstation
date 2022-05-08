import React, { useEffect } from 'react'
import { SuperText } from '@/components/SuperText'
import { useGetUserQuery } from '@/api'
import { useDripsyTheme, View } from 'dripsy'
import WrappedView from '@/components/WrappedView'
import { useStyle } from 'react-native-style-utilities'

const HomePage = () => {
  const { data, error, isLoading } = useGetUserQuery()
  const { colors } = useDripsyTheme().theme
  useEffect(() => {})

  const dataContainer = useStyle(
    () => ({
      backgroundColor: 'grey',
      borderWidth: 4,
      borderColor: 'teal',
      padding: 10,
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    }),
    [],
  )
  return (
    <WrappedView loading={isLoading}>
      <View style={data && dataContainer}>
        <SuperText color={colors.$text}>
          {JSON.stringify(data, null, 4)}
        </SuperText>
      </View>
    </WrappedView>
  )
}

export default HomePage
