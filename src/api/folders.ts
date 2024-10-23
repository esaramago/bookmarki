import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETFolders: APIRoute = async () => {

  const response = await xata.folders
    .select([
      'id',
      'description',
      'level',
      'folder.xata_id',
    ])
    .sort('level', 'asc')
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}