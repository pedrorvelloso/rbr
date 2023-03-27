import { useRevalidator } from '@remix-run/react'
import { useEffect } from 'react'

export const REVALIDATION_SECONDS = 60 // 1 minute

export const useDataRevalidation = (
  intervalInSeconds = REVALIDATION_SECONDS,
) => {
  const revalidator = useRevalidator()

  useEffect(() => {
    const renovateStreams = setInterval(
      () => revalidator.revalidate(),
      1000 * intervalInSeconds,
    )

    return () => {
      clearInterval(renovateStreams)
    }
  }, [intervalInSeconds, revalidator])
}
