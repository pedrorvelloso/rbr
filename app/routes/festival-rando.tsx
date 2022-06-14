import type { LoaderFunction } from '@remix-run/node'

import { getSchedule } from '~/services/festival/service.server'

export const loader: LoaderFunction = () => {
  const schedule = getSchedule()

  return []
}

const FestivalRando = () => {
  return <div>FestivalRando</div>
}

export default FestivalRando
