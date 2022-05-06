import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getEvents } from '~/services/google/calendar.business.server'
import type { CalendarEvent } from '~/services/google/models/Event'
import type { GroupedEvent } from '~/services/google/utils'

import { Heading } from '~/ui/components/typograph'
import { EventsList } from '~/ui/compositions/events-list'

type EventsPageLoaderData = {
  events: Array<CalendarEvent>
  commonTimeZone: string
  groupedServerEvents: Array<GroupedEvent>
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const loader: LoaderFunction = async () => {
  const { events, commonTimeZone, groupedServerEvents } = await getEvents()

  return json<EventsPageLoaderData>(
    { events, commonTimeZone, groupedServerEvents },
    { headers: { 'Cache-Control': `s-maxage=120` } },
  )
}

const EventsPage = () => {
  const data = useLoaderData<EventsPageLoaderData>()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-y-3">
        <Heading className="font-bold -mb-2">Eventos Previstos</Heading>
        <Heading size="heading3">(próxima semana)</Heading>
        <Heading size="heading3" className="text-neutral-400 noscript-hidden">
          Todas as datas e horários são fornecidos em seu fuso horário local.
        </Heading>
        <Heading
          size="heading3"
          className="text-neutral-400 hidden noscript-show"
        >
          Todas as datas e horários são fornecidos no fuso horário{' '}
          {data.commonTimeZone}.
        </Heading>
      </header>
      <EventsList
        events={data.events}
        serverEvents={data.groupedServerEvents}
      />
    </div>
  )
}

export default EventsPage
