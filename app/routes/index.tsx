import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { format, parseISO } from 'date-fns'

import type { Stream } from '~/services/twitch/models/Stream'
import type { Vod } from '~/services/twitch/models/Vod'
import {
  getStreamsWithStreamers,
  getVideos,
} from '~/services/twitch/business.server'

import {
  useDataRevalidation,
  REVALIDATION_SECONDS,
} from '~/hooks/use-data-revalidation'
import { useIsPathTransitioning } from '~/hooks/use-is-path-transitioning'

import { Streams } from '~/ui/compositions/streams'
import { Vods } from '~/ui/compositions/vods'
import { Spinner } from '~/ui/components/spinner'

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
  const isLoading = useIsPathTransitioning()

  useDataRevalidation()

  console.log(format(parseISO(data.vods[0].publishedAt), 'PPpp'))
  console.log(data.vods[0].publishedAt)

  return (
    <div className="flex flex-col gap-y-12">
      <Spinner isLoading={isLoading} />
      <Streams data={data.streams} />
      <Vods data={data.vods} />
    </div>
  )
}

export default IndexPage
