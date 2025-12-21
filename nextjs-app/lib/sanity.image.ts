import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  // The builder automatically picks up hotspot and crop data from the source
  // Using fit('max') ensures the entire image fits within the requested dimensions
  // while maintaining aspect ratio and preventing any cropping
  return builder.image(source).auto('format').fit('max')
}

// Helper function to get optimized image URL with specific dimensions
// This version also respects hotspot and crop data
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
