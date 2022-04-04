import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getStreams } from '~/services/twitch/business.server'

export const loader: LoaderFunction = async () => {
  const streams = await getStreams()

  return json(
    { streams },
    {
      headers: {
        'Cache-Control': 'public, max-age=60, s=maxage=60',
      },
    },
  )
}
