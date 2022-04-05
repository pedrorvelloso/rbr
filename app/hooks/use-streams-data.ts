import { useEffect } from 'react'
import { useFetcher } from '@remix-run/react'

import type { TwitchStreamsResponse } from '~/routes/twitch/streams'
import type { Stream } from '~/services/twitch/models/Stream'

const RENOVATE_DELAY = 1000 * 60 // 1 minute

export const useStreamsData = (initialData: Array<Stream>) => {
  const fetcher = useFetcher<TwitchStreamsResponse>()

  useEffect(() => {
    const renovateStreams = setInterval(
      () => fetcher.submit({ action: '/twitch/streams', method: 'get' }),
      RENOVATE_DELAY,
    )

    return () => {
      clearInterval(renovateStreams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return fetcher.data?.streams || initialData
}
