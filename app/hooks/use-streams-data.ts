import { useEffect } from 'react'

import type { TwitchStreamsResponse } from '~/routes/twitch/streams'
import type { Stream } from '~/services/twitch/models/Stream'

import { useRevalidate } from './use-revalidate'

export const RENOVATE_DELAY_SECONDS = 60 // 1 minute

export const useStreamsData = (initialData: Array<Stream>) => {
  const { revalidate, state, data } = useRevalidate<TwitchStreamsResponse>()

  useEffect(() => {
    const renovateStreams = setInterval(
      () => revalidate(),
      1000 * RENOVATE_DELAY_SECONDS,
    )

    return () => {
      clearInterval(renovateStreams)
    }
  }, [revalidate])

  return {
    streams: data?.streams || initialData,
    isLoading: state === 'loading',
  }
}
