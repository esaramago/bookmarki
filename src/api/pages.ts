import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETPages: APIRoute = async () => {

  const response = await xata.pages
    .select([
      'id',
      'description',
      'level',
      'folder.xata_id',
      'href'
    ])
    .sort('level', 'asc')
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}