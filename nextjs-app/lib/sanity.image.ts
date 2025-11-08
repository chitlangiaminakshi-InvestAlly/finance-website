import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max')
}

// Helper function to get optimized image URL with specific dimensions
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
) {
  const imageBuilder = urlForImage(source)

  if (width) {
    imageBuilder.width(width)
  }

  if (height) {
    imageBuilder.height(height)
  }

  return imageBuilder.url()
}
