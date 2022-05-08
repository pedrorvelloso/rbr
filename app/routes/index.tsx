import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { Stream, Vod } from '~/services/twitch/models'

import {
  getStreamsWithStreamers,
  getVideos,
} from '~/services/twitch/service.server'

import {
  useDataRevalidation,
  REVALIDATION_SECONDS,
} from '~/hooks/use-data-revalidation'

import { Streams } from '~/ui/compositions/streams'
import { Vods } from '~/ui/compositions/vods'

type IndexLoaderData = {
  streams: Array<Stream>
  vods: Array<Vod>
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const loader: LoaderFunction = async () => {
  const [streams, vods] = await Promise.all([
    getStreamsWithStreamers(),
    getVideos('530941879'),
  ])

  return json<IndexLoaderData>(
    { streams, vods },
    { headers: { 'Cache-Control': `s-maxage=${REVALIDATION_SECONDS}` } },
  )
}

const IndexPage = () => {
  const data = useLoaderData<IndexLoaderData>()

  useDataRevalidation()

  return (
    <div className="flex flex-col gap-y-12">
      <Streams data={data.streams} />
      <Vods data={data.vods} />
    </div>
  )
}

export default IndexPage
