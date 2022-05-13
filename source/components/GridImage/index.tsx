import React from 'react'
import { useStyle } from 'react-native-style-utilities'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { getRespectiveHeightWidth } from '@/utils/imageHelper'
import metrics from '@/styles/metrics'
interface GridImageProps {
  size?: 'banner' | 'small' | 'medium' | 'large' | 'full'
  loading?: boolean
  source?: string | string[]
}

interface DataProps {
  id: string | any
  title: string
}
export function GridImage({
  size = 'medium',
  source,
  ...props
}: GridImageProps): React.ReactElement {
  const customStyle = useStyle(() => getRespectiveHeightWidth(size), [size])
  const width = metrics.screenWidth
  return <></>
}
