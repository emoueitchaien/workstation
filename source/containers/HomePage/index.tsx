import React, { useEffect } from 'react'
import { View } from 'react-native'
import { SuperText } from '@/components/SuperText'
import { useLazyGetUserQuery } from '@/api'

const HomePage = () => {
  const { data } = useLazyGetUserQuery()[1]

  useEffect(() => {
    console.log('User Data', data)
  })
  return (
    <View>
      <SuperText color="black">Hey HomePage</SuperText>
    </View>
  )
}

export default HomePage
