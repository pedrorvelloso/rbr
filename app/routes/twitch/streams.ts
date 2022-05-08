import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import type { Stream } from '~/services/twitch/models'
import { getStreamsWithStreamers } from '~/services/twitch/service.server'

export type TwitchStreamsResponse = {
  streams: Array<Stream>
}

export const loader: LoaderFunction = async () => {
  const streams = await getStreamsWithStreamers()

  return json<TwitchStreamsResponse>(
    { streams },
    {
      headers: {
        'Cache-Control': 's-maxage=60',
      },
    },
  )
}
