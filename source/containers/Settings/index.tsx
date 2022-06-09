import React, { useEffect, useState } from 'react'
import { useDripsyTheme, TextInput } from 'dripsy'
import WrappedView from '@/components/WrappedView'
import { SuperImage } from '@/components/SuperImage'
import { SuperButton } from '@/components/SuperButton'
import { useGetImagesQuery } from '@/api'
import { useStyle } from 'react-native-style-utilities'

const Setting = () => {
  const { colors } = useDripsyTheme().theme
  const [isLoading, load] = useState(false)
  const [uri, setUri] = useState('')
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('dumplings')

  const { data, isLoading: dataLoading } = useGetImagesQuery(query)
  const searchBarStyle = useStyle(
    () => ({
      // height: 60,
      width: '100%',
      borderWidth: 1,
      borderColor: 'grey',
      padding: 20,
      // position: 'absolute',
      top: 0,
    }),
    [],
  )
  useEffect(() => {
    if (data !== undefined) {
      setUri(data?.results[count]?.urls.regular)
    }
  }, [data, count, uri])

  return (
    <WrappedView scrollview>
      <>
        <TextInput
          onSubmitEditing={({ nativeEvent }) => setQuery(nativeEvent.text)}
          placeholder="Hey"
          style={searchBarStyle}
        />
        <SuperImage
          source={{
            uri: uri,
          }}
          // onProgress={e =>
          //   console.log('PROGRESS', e.nativeEvent.loaded / e.nativeEvent.total)
          // }
          onError={() => load(false)}
          onLoadEnd={() => load(false)}
          onLoadStart={() => load(true)}
          resizeMode="cover"
          size="full"
        />
        <SuperButton
          onPress={() => setCount(Math.floor(Math.random() * 10))}
          title="Next"
          color={colors.$button}
          size="large"
        />
      </>
    </WrappedView>
  )
}

export default Setting
