import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity.config'

export const client = createClient(sanityConfig)

// Write client for mutations (server-side only)
export const writeClient = createClient({
  ...sanityConfig,
  useCdn: false, // Don't use CDN for writes
  token: process.env.SANITY_API_WRITE_TOKEN, // Write token
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 3600, // Cache for 1 hour (3600 seconds)
      tags,
    },
  })
}
