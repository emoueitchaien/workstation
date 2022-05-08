import React, { useReducer, useState } from 'react'
import { SuperText } from '@/components/SuperText'
import { useDripsyTheme } from 'dripsy'
import WrappedView from '@/components/WrappedView'
import { useTranslation } from 'react-i18next'
import { SuperImage } from '@/components/SuperImage'

const Setting = () => {
  const { colors } = useDripsyTheme().theme
  const { t } = useTranslation()
  const [isLoading, load] = useState(true)

  return (
    <WrappedView>
      <>
        <SuperText color={colors.$text}>{t('welcome')}</SuperText>
        <SuperImage
          source={{
            uri: t('profile'),
            cache: 'immutable',
          }}
          onProgress={e =>
            console.log('PROGRESS', e.nativeEvent.loaded / e.nativeEvent.total)
          }
          onError={() => load(false)}
          onLoadEnd={() => load(false)}
          onLoadStart={() => load(true)}
          resizeMode="cover"
          size="full"
        />
      </>
    </WrappedView>
  )
}

export default Setting
