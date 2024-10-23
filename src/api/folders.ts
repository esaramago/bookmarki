import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETFolders: APIRoute = async () => {

  const response = await xata.folders
    .select([
      'id',
      'description',
      'level',
      'path.id',
    ])
    .sort('level', 'asc')
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}