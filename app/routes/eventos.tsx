import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getEvents } from '~/services/google/service.server'
import type { CalendarEvent } from '~/services/google/models'
import type { GroupedEvent } from '~/utils/events'
import { getHeaders, SMaxAge } from '~/utils/headers'

import { Heading } from '~/ui/components/typograph'
import { EventsList } from '~/ui/compositions/events-list'
import { EventDetail } from '~/ui/components/event-detail'

type EventsPageLoaderData = {
  events: Array<CalendarEvent>
  commonTimeZone: string
  groupedServerEvents: Array<GroupedEvent<CalendarEvent>>
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const { events, commonTimeZone, groupedServerEvents } = await getEvents()

  return json<EventsPageLoaderData>(
    { events, commonTimeZone, groupedServerEvents },
    { headers: { ...SMaxAge(120) } },
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
        renderDetail={(event) => (
          <EventDetail
            dateTime={event.dateTime}
            serverStartTime={event.serverStartTime}
            startTime={event.start}
            summary={<span>{event.summary}</span>}
          />
        )}
      />
    </div>
  )
}

export default EventsPage
