import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

import { getEvents } from '~/services/google/calendar.business.server'
import type { CalendarEvent } from '~/services/google/models/Event'

import { Heading } from '~/ui/components/typograph'
import { formatDate } from '~/utils/dates'

type EventsPageLoaderData = {
  events: Array<CalendarEvent>
  commonTimeZone: string
}

export const loader: LoaderFunction = async () => {
  const { events, commonTimeZone } = await getEvents()

  return json<EventsPageLoaderData>({ events, commonTimeZone })
}

const EventsPage = () => {
  const data = useLoaderData<EventsPageLoaderData>()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-y-3">
        <div className="flex gap-x-2 items-baseline">
          <Heading className="font-bold">Eventos Previstos</Heading>
          <Heading size="heading3">(prox. semana)</Heading>
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
          <li
            className="flex gap-3 min-w-0 items-center odd:bg-white/5 even:bg-transparent p-3"
            key={event.id}
          >
            <span className="font-bold min-w-fit">
              <ClientOnly fallback={event.serverDefaultStart}>
                {() => <>{formatDate(event.start.toString(), 'Pp')}</>}
              </ClientOnly>
            </span>
            <span className="text-ellipsis overflow-hidden whitespace-nowrap">
              {event.summary}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventsPage
