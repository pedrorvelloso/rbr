import { useEffect } from 'react'
import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'

import type { Stream } from '~/services/twitch/models/Stream'
import { getStreamsWithStreamers } from '~/services/twitch/business.server'

import { Streams } from '~/ui/compositions/streams'

type IndexLoaderData = {
  streams: Array<Stream>
  updatedAt: string
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const loader: LoaderFunction = async () => {
  const streams = await getStreamsWithStreamers()
  const updatedAt = new Date().toString()

  return json<IndexLoaderData>(
    { streams, updatedAt },
    { headers: { 'Cache-Control': 's-maxage=10' } },
  )
}

export default function Index() {
  const data = useLoaderData<IndexLoaderData>()
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(
      () => navigate('.', { replace: true }),
      1000 * 10,
    )

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Streams data={data.streams} />
      <p>{data.updatedAt}</p>
    </div>
  )
}
