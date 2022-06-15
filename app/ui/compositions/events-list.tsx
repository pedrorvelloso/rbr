import { useState, useEffect } from 'react'
import { useHydrated } from 'remix-utils'
import clsx from 'clsx'

import { castEventsDate, type GroupedEvent, groupEvents } from '~/utils/events'
import type { DateItem } from '~/models/DateItem'

import { Accordion } from '../components/accordion'

interface EventsListProps<T extends DateItem & { id: string }> {
  events: Array<T>
  serverEvents: Array<GroupedEvent<T>>
  renderDetail(event: T): React.ReactNode
  liveNowId?: string
}

export const EventsList = <Events extends DateItem & { id: string }>({
  events,
  serverEvents,
  renderDetail,
  liveNowId,
}: EventsListProps<Events>) => {
  const [groups, setGroups] = useState(serverEvents)
  const hydrated = useHydrated()

  useEffect(() => {
    if (hydrated) {
      const clientCastedDates = castEventsDate(events)
      const clientGroupedEvents = groupEvents(clientCastedDates, true)

      setGroups(clientGroupedEvents)
    }
  }, [events, hydrated])

  return (
    <div>
      {groups.map((group) => (
        <Accordion
          title={group.date}
          key={group.date}
          defaultOpen
          removeBorder
          buttonClassName="p-3 my-1"
        >
          <div>
            <ul>
              {group.events.map((event) => (
                <li
                  className={clsx('p-3', {
                    'odd:bg-white/5 even:bg-transparent':
                      event.id !== liveNowId,
                    'bg-green-700 text-white': event.id === liveNowId,
                  })}
                  key={event.id}
                  id={event.id}
                >
                  {renderDetail(event)}
                </li>
              ))}
            </ul>
          </div>
        </Accordion>
      ))}
    </div>
  )
}
