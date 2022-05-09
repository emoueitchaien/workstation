import React, { useEffect } from 'react'
import { SuperText } from '@/components/SuperText'
import { useDripsyTheme } from 'dripsy'
import WrappedView from '@/components/WrappedView'

const HomePage = () => {
  const { colors } = useDripsyTheme().theme
  useEffect(() => {})

  return (
    <WrappedView>
      <SuperText color={colors.$text}>Welcome to Dripsy</SuperText>
    </WrappedView>
  )
}

export default HomePage
