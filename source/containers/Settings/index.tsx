import React, { useEffect } from 'react'
import { SuperText } from '@/components/SuperText'
import { useGetUserQuery } from '@/api'
import { useDripsyTheme } from 'dripsy'
import WrappedView from '@/components/WrappedView'

const Setting = () => {
  const { data, error } = useGetUserQuery()
  const { colors } = useDripsyTheme().theme
  useEffect(() => {
    console.log('Data', data)
  })
  return (
    <WrappedView>
      <SuperText color={colors.$text}>Hey Setting</SuperText>
    </WrappedView>
  )
}

export default Setting
