import React from 'react'
import { useStyle } from 'react-native-style-utilities'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { getRespectiveHeightWidth } from '@/utils/imageHelper'

interface SuperImageProps extends FastImageProps {
  size?: 'banner' | 'small' | 'medium' | 'large' | 'full'
  loading?: boolean
}

const defaultProps = {
  size: 'medium',
  loading: false,
}

export function SuperImage({
  source,
  size = 'medium',
  resizeMode = 'cover',
  ...props
}: SuperImageProps): React.ReactElement {
  const customStyle = useStyle(() => getRespectiveHeightWidth(size), [size])
  return (
    <FastImage
      resizeMode={resizeMode}
      source={source}
      style={customStyle}
      {...props}
    />
  )
}

SuperImage.defaultProps = defaultProps
