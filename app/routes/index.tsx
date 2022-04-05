import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { TwitchStreamsResponse } from './twitch/streams'
import type { Stream } from '~/services/twitch/models/Stream'

import { fetchFromOrigin } from '~/utils/fetchOrigin.server'

import { Heading } from '~/ui/components/typograph'
import { Anchor } from '~/ui/components/anchor'

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
          <article key={stream.id} className="flex flex-col gap-y-3">
            <Anchor
              href={`https://twitch.tv/${stream.userName}`}
              target="_blank"
              className="relative group"
            >
              <img
                src={stream.thumbnailUrl}
                alt={stream.title}
                width={320}
                height={180}
                className="w-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
              <div className="absolute bottom-0 right-0 top-0 left-0 bg-primary -z-10" />
            </Anchor>
            <div className="flex gap-x-3">
              <img
                src={stream.profileImageUrl}
                alt={stream.userName}
                className="h-10 rounded-full"
                height={40}
                width={40}
              />
              <span className="min-w-0">
                <Heading
                  size="heading3"
                  className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold"
                  title={stream.title}
                >
                  {stream.title}
                </Heading>
                <p className="text-[13px] text-neutral-400">
                  {stream.userName}
                </p>
                <p className="text-[13px] text-neutral-400">
                  {stream.gameName}
                </p>
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
