import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getStreamsWithStreamers } from '~/services/twitch/business.server'
import { Stream } from '~/services/twitch/models/Stream'

export type TwitchStreamsResponse = {
  streams: Array<Stream>
}

export const loader: LoaderFunction = async () => {
  const streams = await getStreamsWithStreamers()

  return json<TwitchStreamsResponse>(
    { streams },
    {
      headers: {
        'Cache-Control': 'public, max-age=60, s-maxage=60',
      },
    },
  )
}
