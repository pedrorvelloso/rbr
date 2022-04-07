import { useTransition, useLocation } from '@remix-run/react'

export const useIsPathTransitioning = () => {
  const transition = useTransition()
  const location = useLocation()

  return (
    transition.state === 'loading' &&
    transition.location.pathname === location.pathname
  )
}
