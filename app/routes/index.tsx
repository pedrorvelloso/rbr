import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { Stream } from '~/services/twitch/models/Stream'
import { getStreamsWithStreamers } from '~/services/twitch/business.server'

import {
  useStreamsData,
  RENOVATE_DELAY_SECONDS,
} from '~/hooks/use-streams-data'

import { Streams } from '~/ui/compositions/streams'

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
    { headers: { 'Cache-Control': `s-maxage=${RENOVATE_DELAY_SECONDS}` } },
  )
}

export default function Index() {
  const data = useLoaderData<IndexLoaderData>()
  const { streams } = useStreamsData(data.streams)

  return (
    <div>
      <Streams data={streams} />
    </div>
  )
}
