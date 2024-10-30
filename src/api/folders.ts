import xata from '@/xataClient'
import type { APIRoute } from 'astro'

export const GETFolders: APIRoute = async () => {

  const response = await xata.folders
    .select([
      'id',
      'description',
      'parent.xata_id',
    ])
    .getAll()

  return new Response(
    JSON.stringify(response),
  )
}