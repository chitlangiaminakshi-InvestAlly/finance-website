import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity.config'

export const client = createClient(sanityConfig)

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
