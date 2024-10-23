import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETPages: APIRoute = async () => {

  const response = await xata.files
    .select([
      'id',
      'description',
      'level',
      'path.id',
      'href'
    ])
    .sort('level', 'asc')
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}