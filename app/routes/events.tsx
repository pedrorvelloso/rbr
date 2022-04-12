import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

import { formatDate } from '~/utils/dates'

export const loader: LoaderFunction = async () => {
  return new Date('2022-04-12T00:00:00-03:00')
}

const EventsPage = () => {
  const data = useLoaderData()

  return (
    <div>
      <ClientOnly>{() => <p>{formatDate(data, 'PPpp')}</p>}</ClientOnly>
    </div>
  )
}

export default EventsPage
