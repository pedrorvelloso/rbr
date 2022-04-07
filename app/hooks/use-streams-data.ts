import { useEffect } from 'react'
import { useFetcher } from '@remix-run/react'

import type { TwitchStreamsResponse } from '~/routes/twitch/streams'
import type { Stream } from '~/services/twitch/models/Stream'

export const RENOVATE_DELAY_SECONDS = 10 // 1 minute

export const useStreamsData = (initialData: Array<Stream>) => {
  const fetcher = useFetcher<TwitchStreamsResponse>()

  useEffect(() => {
    const renovateStreams = setInterval(
      () => fetcher.submit({ method: 'get' }),
      1000 * RENOVATE_DELAY_SECONDS,
    )

    return () => {
      clearInterval(renovateStreams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return fetcher.data?.streams || initialData
}
