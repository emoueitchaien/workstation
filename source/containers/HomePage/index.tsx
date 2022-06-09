import React, { useEffect } from 'react'
import { SuperText } from '@/components/SuperText'
import { useDripsyTheme } from 'dripsy'
import WrappedView from '@/components/WrappedView'
import { GridImage } from '@/components/GridImage'
import AutoLink from '@/components/AutoLink'

const HomePage = () => {
  const { colors } = useDripsyTheme().theme
  useEffect(() => {}, [])

  return (
    <WrappedView>
      <SuperText color={colors.$text}>Welcome to Summon</SuperText>
      {/* <GridImage /> */}
      <AutoLink text="Visit to summonapp.com" />
    </WrappedView>
  )
}

export default HomePage
