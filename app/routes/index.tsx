import { Suspense } from 'react'
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
import {
  VideosSuspended,
  DirectoryTitleSuspended,
} from '~/ui/suspendend/videos.suspendend'

type IndexLoaderData = {
  streams: Array<Stream>
  vods: Array<Vod>
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const vods = getVideos('530941879')
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
      <Suspense
        fallback={
          <VideosSuspended
            title={<DirectoryTitleSuspended title="Ao vivo" showLoader />}
            showUpperSkeleton
          />
        }
      >
        <Await resolve={data.streams}>
          {(streams) => <Streams data={streams} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={
          <VideosSuspended
            title={
              <DirectoryTitleSuspended title="Assista mais de Rando Brasil" />
            }
          />
        }
      >
        <Await resolve={data.vods}>{(vods) => <Vods data={vods} />}</Await>
      </Suspense>
    </div>
  )
}

export default IndexPage
