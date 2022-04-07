import { useCallback } from 'react'
import { useFetcher } from '@remix-run/react'

interface UseRevalidate<T> {
  revalidate: () => void
  state: 'loading' | 'idle'
  data?: T
}

export const useRevalidate = <T>(): UseRevalidate<T> => {
  const fetcher = useFetcher<T>()

  const revalidate = useCallback(
    () => fetcher.submit({ method: 'get' }),
    [fetcher],
  )

  const state =
    fetcher.state === 'loading' || fetcher.state === 'submitting'
      ? 'loading'
      : 'idle'

  return { revalidate, state, data: fetcher.data }
}
