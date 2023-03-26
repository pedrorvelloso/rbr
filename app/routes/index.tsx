import type { LoaderFunction } from '@remix-run/node'
import { defer } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'

import type { Stream, Vod } from '~/services/twitch/models'

import {
  getStreamsWithStreamers,
  getVideos,
} from '~/services/twitch/service.server'

import {
  useDataRevalidation,
  REVALIDATION_SECONDS,
} from '~/hooks/use-data-revalidation'

import { getHeaders, SMaxAge } from '~/utils/headers'

import { Streams } from '~/ui/compositions/streams'
import { Vods } from '~/ui/compositions/vods'
import { Suspense } from 'react'
import { StreamsSuspendend } from '~/ui/suspendend/streams.suspendend'

type IndexLoaderData = {
  streams: Array<Stream>
  vods: Array<Vod>
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const vods = await getVideos('530941879')
  const streams = getStreamsWithStreamers()

  return defer(
    { streams, vods },
    { headers: { ...SMaxAge(REVALIDATION_SECONDS) } },
  )
}

const IndexPage = () => {
  const data = useLoaderData<IndexLoaderData>()

  useDataRevalidation()

  return (
    <div className="flex flex-col gap-y-12">
      <Suspense fallback={<StreamsSuspendend />}>
        <Await resolve={data.streams}>
          {(streams) => <Streams data={streams} />}
        </Await>
      </Suspense>
      <Vods data={data.vods} />
    </div>
  )
}

export default IndexPage
