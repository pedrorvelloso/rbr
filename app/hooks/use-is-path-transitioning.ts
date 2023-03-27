import { useNavigation, useLocation } from '@remix-run/react'

export const useIsPathTransitioning = () => {
  const navigation = useNavigation()
  const location = useLocation()

  return (
    navigation.state === 'loading' &&
    navigation.location.pathname === location.pathname
  )
}
