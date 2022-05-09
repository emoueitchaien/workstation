export const getRespectiveHeightWidth = (
  size: 'banner' | 'small' | 'medium' | 'large' | 'full',
) => {
  return size === 'banner'
    ? { height: '30%', width: '100%' }
    : size === 'full'
    ? { height: '88%', width: '100%' }
    : size === 'small'
    ? { height: '15%', width: '15%' }
    : size === 'large'
    ? { height: '50%', width: '50%' }
    : { height: '30%', width: '30%' }
}
