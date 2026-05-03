export interface VideoEmbed {
  videoType: 'youtube' | 'vimeo' | 'url'
  videoUrl: string
  thumbnail?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  caption?: string
}

export interface GifEmbed {
  gifUrl: string
  alt: string
  caption?: string
  size: 'small' | 'medium' | 'large' | 'full'
}

export interface SanityReferenceAsset {
  _ref: string
  _type: 'reference'
}

export interface PortableTextSpan {
  _type?: string
  text?: string
}

export interface PortableTextBlock {
  _type: string
  style?: string
  children?: PortableTextSpan[]
  id?: string
  [key: string]: unknown
}

export interface SanityImageHotspot {
  x: number
  y: number
  height: number
  width: number
}

export interface SanityImageCrop {
  top: number
  bottom: number
  left: number
  right: number
}

export interface BlogPost {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: SanityReferenceAsset
    alt: string
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
  }
  mainVideo?: VideoEmbed
  category: {
    _id: string
    title: string
    slug: {
      current: string
    }
    color: string
  }
  author: {
    _id: string
    name: string
    slug: {
      current: string
    }
    image?: {
      asset: SanityReferenceAsset
    }
    role?: string
    bio?: string
  }
  publishedAt: string
  body: PortableTextBlock[]
  featured: boolean
  tags?: string[]
  readTime?: number
  likeCount?: number
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color: string
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: SanityReferenceAsset
  }
  bio?: string
  role?: string
}
