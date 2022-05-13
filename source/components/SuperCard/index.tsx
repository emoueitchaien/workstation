import React from 'react'
import { useDripsyTheme, View } from 'dripsy'
import { SuperText } from '@/components/SuperText'

const SuperCard = () => {
  const { colors } = useDripsyTheme().theme
  return (
    <View>
      <SuperText color="black">Hey SuperCard</SuperText>
    </View>
  )
}
export default SuperCard
