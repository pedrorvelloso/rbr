import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { TwitchStreamsResponse } from './twitch/streams'
import type { Stream } from '~/services/twitch/models/Stream'

import { fetchFromOrigin } from '~/utils/fetchOrigin.server'

import { Heading } from '~/ui/components/typograph'
import { StreamCard } from '~/ui/components/stream-card'

type IndexLoaderData = {
  streams: Array<Stream>
}

export const loader: LoaderFunction = async ({ request }) => {
  const response = await fetchFromOrigin('twitch/streams', request)
  const { streams }: TwitchStreamsResponse = await response.json()

  return { streams }
}

export default function Index() {
  const { streams } = useLoaderData<IndexLoaderData>()

  return (
    <div>
      <Heading className="flex items-center gap-x-4 font-bold mb-4">
        Ao vivo{' '}
        <div className="relative flex items-center justify-center w-fit">
          <div className="h-[14px] w-[14px] bg-red-600/80 animate-ping rounded-full absolute" />
          <div className="h-3 w-3 bg-red-600 rounded-full" />
        </div>
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {streams.map((stream) => (
          <StreamCard {...stream} key={stream.id} />
        ))}
      </div>
    </div>
  )
}
