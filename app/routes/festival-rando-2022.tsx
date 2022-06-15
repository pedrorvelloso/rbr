import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import type { ScheduleItem } from '~/services/festival/models'
import { getSchedule } from '~/services/festival/service.server'

import { Heading } from '~/ui/components/typograph'
import { EventDetail } from '~/ui/components/event-detail'
import { EventsList } from '~/ui/compositions/events-list'

import type { GroupedEvent } from '~/utils/events'
import { getPageSeo } from '~/utils/seo'
import { Anchor } from '~/ui/components/anchor'

export const meta: MetaFunction = ({ parentsData }) =>
  getPageSeo({
    parentsData,
    seo: { description: 'Assista ao Evento Festival Rando 2022!' },
  })

type FestivalRando2022PageLoaderData = {
  events: Array<ScheduleItem>
  commonTimeZone: string
  groupedServerEvents: Array<GroupedEvent<ScheduleItem>>
}

export const loader: LoaderFunction = () => {
  const schedule = getSchedule()

  return json<FestivalRando2022PageLoaderData>(schedule)
}

const FestivalRando2022Page = () => {
  const data = useLoaderData<FestivalRando2022PageLoaderData>()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-y-3">
        <Heading className="font-bold -mb-2">Festival Rando 2022</Heading>
        <Heading size="heading3">
          Assista em{' '}
          <Anchor
            href="https://twitch.tv/randobrasil"
            className="text-primary hover:underline"
            target="_blank"
          >
            https://twitch.tv/randobrasil
          </Anchor>
        </Heading>
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
            summary={
              <div className="w-full">
                <span>
                  <b>{event.title}</b> - {event.description}
                </span>
                <div className="flex flex-col lg:flex-row lg:gap-4 w-full">
                  <span>
                    <b>Estimativa:</b> {event.length}
                  </span>
                  {event.runner && (
                    <span>
                      <b>Runner:</b> {event.runner}
                    </span>
                  )}
                </div>
              </div>
            }
          />
        )}
      />
    </div>
  )
}

export default FestivalRando2022Page
