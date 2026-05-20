export const stripHtml = (value: string): string =>
  value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

export const normalizeId = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣_-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

export const getPlatformLabel = (platform: string): string => {
  switch (platform) {
    case 'web':
      return 'Web'
    case 'mobile':
      return 'Mobile'
    case 'responsive':
      return 'Responsive'
    default:
      return platform
  }
}
