import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity.image'

// Helper function to extract video ID and generate embed URL
function getVideoEmbedUrl(videoUrl: string, videoType: string): string | null {
  try {
    if (videoType === 'youtube') {
      // Handle both youtube.com and youtu.be URLs
      const url = new URL(videoUrl)
      let videoId = ''

      if (url.hostname.includes('youtu.be')) {
        // Format: https://youtu.be/VIDEO_ID
        videoId = url.pathname.slice(1)
      } else if (url.hostname.includes('youtube.com')) {
        // Format: https://www.youtube.com/watch?v=VIDEO_ID
        videoId = url.searchParams.get('v') || ''
      }

      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    } else if (videoType === 'vimeo') {
      // Format: https://vimeo.com/VIDEO_ID
      const videoId = videoUrl.split('vimeo.com/')[1]?.split('/')[0]
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null
    } else if (videoType === 'url') {
      // Direct URL - return as is
      return videoUrl
    }
  } catch (error) {
    console.error('Error parsing video URL:', error)
  }
  return null
}

const components: PortableTextComponents = {
  unknownType: ({ value }) => {
    console.warn('Unknown PortableText type:', value?._type, value)
    return null
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-black text-slate-900 mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-slate-900 mt-10 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-600 pl-6 py-2 my-8 italic text-slate-600 bg-teal-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-slate-700 leading-relaxed">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-slate-700 leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 text-teal-600 px-2 py-1 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith('http')
      const linkProps = isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}

      return (
        <Link
          href={value?.href || '#'}
          {...linkProps}
          className="text-teal-600 hover:text-teal-700 font-medium underline decoration-teal-300 hover:decoration-teal-500 transition-colors duration-300"
        >
          {children}
        </Link>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null

      const imageUrl = urlForImage(value).width(800).url()

      return (
        <figure className="my-10">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={450}
            className="rounded-xl w-full h-auto"
          />
          {value.alt && (
            <figcaption className="text-center text-sm text-slate-500 mt-3">
              {value.alt}
            </figcaption>
          )}
        </figure>
      )
    },
    videoEmbed: ({ value }) => {
      if (!value?.videoUrl || !value?.videoType) return null

      const embedUrl = getVideoEmbedUrl(value.videoUrl, value.videoType)

      if (!embedUrl) {
        return (
          <div className="my-10 p-6 bg-red-50 border border-red-200 rounded-xl text-red-600">
            <p className="font-medium">Unable to load video</p>
            <p className="text-sm mt-1">Please check the video URL is correct.</p>
          </div>
        )
      }

      return (
        <figure className="my-10">
          <div className="relative w-full rounded-xl overflow-hidden bg-slate-900" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={value.caption || 'Embedded video'}
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-500 mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    gifEmbed: ({ value }) => {
      console.log('gifEmbed renderer called with value:', value)
      if (!value?.gifUrl) {
        console.warn('gifEmbed: No gifUrl found in value:', value)
        return null
      }

      // Determine width based on size
      const sizeMap = {
        small: 'max-w-sm',
        medium: 'max-w-2xl',
        large: 'max-w-4xl',
        full: 'w-full',
      }
      const sizeClass = sizeMap[value.size as keyof typeof sizeMap] || sizeMap.medium

      return (
        <figure className="my-10 flex flex-col items-center">
          <div className={`${sizeClass} w-full`}>
            <img
              src={value.gifUrl}
              alt={value.alt || 'Animated GIF'}
              className="rounded-xl w-full h-auto shadow-lg"
              loading="lazy"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-sm text-slate-500 mt-3 max-w-2xl">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

interface PortableTextProps {
  value: any
  className?: string
}

export default function PortableText({ value, className = '' }: PortableTextProps) {
  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <PortableTextReact value={value} components={components} />
    </div>
  )
}
