import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'

export const REVALIDATION_SECONDS = 60 // 1 minute

export const useDataRevalidation = (
  intervalInSeconds = REVALIDATION_SECONDS,
) => {
  const navigate = useNavigate()

  useEffect(() => {
    const renovateStreams = setInterval(
      () => navigate('.', { replace: true }),
      1000 * intervalInSeconds,
    )

    return () => {
      clearInterval(renovateStreams)
    }
  }, [intervalInSeconds, navigate])
}
