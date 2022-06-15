import { json, type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { BsCaretDownFill } from 'react-icons/bs'

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

type FaistevlRaodimnzer2022PageLoaderData = {
  events: Array<ScheduleItem>
  commonTimeZone: string
  groupedServerEvents: Array<GroupedEvent<ScheduleItem>>
  liveNow?: ScheduleItem
  nextUp?: ScheduleItem
}

export const loader: LoaderFunction = () => {
  const schedule = getSchedule()

  return json<FaistevlRaodimnzer2022PageLoaderData>(schedule)
}

const FaistevlRaodimnzer2022Page = () => {
  const data = useLoaderData<FaistevlRaodimnzer2022PageLoaderData>()

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col gap-y-3">
        <Heading className="font-bold -mb-2">Faistevl Raodimnzer 2022</Heading>
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
        <div className="flex flex-col lg:flex-row justify-center gap-x-8 gap-y-4">
          {data.liveNow && (
            <div className="flex flex-col border border-green-700 lg:w-80">
              <div className="bg-green-700 px-3 py-1 flex justify-between">
                <span className="text-white">Acontecendo agora</span>
                <a
                  className="flex gap-2 items-center"
                  href={`#${data.liveNow?.id}`}
                >
                  ver <BsCaretDownFill />
                </a>
              </div>
              <div className="px-3 py-1 flex flex-col">
                <b>{data.liveNow?.title}</b>
              </div>
            </div>
          )}
          {data.nextUp && (
            <div className="flex flex-col border border-neutral-700 lg:w-80">
              <div className="bg-neutral-700 px-3 py-1">Em breve</div>
              <div className="px-3 py-1 flex flex-col">
                <b>{data.nextUp?.title}</b>
              </div>
            </div>
          )}
        </div>
      </header>
      <EventsList
        events={data.events}
        serverEvents={data.groupedServerEvents}
        liveNowId={data.liveNow?.id}
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

export default FaistevlRaodimnzer2022Page
