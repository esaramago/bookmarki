import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETLinks: APIRoute = async () => {

  const response = await xata.links
    .select([
      'id',
      'description',
      'parent.xata_id',
      'href'
    ])
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}