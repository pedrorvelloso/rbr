import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { Stream } from '~/services/twitch/models/Stream'
import { getStreamsWithStreamers } from '~/services/twitch/business.server'

import { Streams } from '~/ui/compositions/streams'

type IndexLoaderData = {
  streams: Array<Stream>
  updatedAt: string
}

export const headers: HeadersFunction = () => ({
  'Cache-Control': 's-maxage=45, stale-while-revalidate=15',
})

export const loader: LoaderFunction = async () => {
  const streams = await getStreamsWithStreamers()
  const updatedAt = new Date().toString()

  return json<IndexLoaderData>(
    { streams, updatedAt },
    { headers: { 'Cache-Control': 's-maxage=60' } },
  )
}

export default function Index() {
  const data = useLoaderData<IndexLoaderData>()

  return (
    <div>
      <Streams data={data.streams} />
      <p>{data.updatedAt}</p>
    </div>
  )
}
