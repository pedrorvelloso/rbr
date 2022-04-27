import type { LoaderFunction, HeadersFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getEvents } from '~/services/google/calendar.business.server'
import type { CalendarEvent } from '~/services/google/models/Event'

import { EventDetail } from '~/ui/components/event-detail'
import { Heading } from '~/ui/components/typograph'

type EventsPageLoaderData = {
  events: Array<CalendarEvent>
  commonTimeZone: string
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const loader: LoaderFunction = async () => {
  const { events, commonTimeZone } = await getEvents()

  return json<EventsPageLoaderData>(
    { events, commonTimeZone },
    { headers: { 'Cache-Control': `s-maxage=120` } },
  )
}

const EventsPage = () => {
  const data = useLoaderData<EventsPageLoaderData>()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-y-3">
        <div className="flex gap-x-2 items-baseline">
          <Heading className="font-bold">Eventos Previstos</Heading>
          <Heading size="heading3">(nessa semana)</Heading>
        </div>
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
      <ul>
        {data.events.map((event) => (
          <li className="odd:bg-white/5 even:bg-transparent p-3" key={event.id}>
            <EventDetail
              dateTime={event.dateTime}
              serverStartTime={event.serverStartTime}
              startTime={event.start}
              summary={event.summary}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventsPage
