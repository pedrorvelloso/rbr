import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { Stream } from '~/services/twitch/models/Stream'
import { getStreamsWithStreamers } from '~/services/twitch/business.server'

import {
  useDataRevalidation,
  REVALIDATION_SECONDS,
} from '~/hooks/use-data-revalidation'
import { useIsPathTransitioning } from '~/hooks/use-is-path-transitioning'

import { Streams } from '~/ui/compositions/streams'
import { Spinner } from '~/ui/components/spinner'

type IndexLoaderData = {
  streams: Array<Stream>
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const loader: LoaderFunction = async () => {
  const streams = await getStreamsWithStreamers()

  return json<IndexLoaderData>(
    { streams },
    { headers: { 'Cache-Control': `s-maxage=${REVALIDATION_SECONDS}` } },
  )
}

const IndexPage = () => {
  const data = useLoaderData<IndexLoaderData>()
  const isLoading = useIsPathTransitioning()

  useDataRevalidation()

  return (
    <div>
      <Spinner isLoading={isLoading} />
      <Streams data={data.streams} />
    </div>
  )
}

export default IndexPage
