import { useState, useEffect } from 'react'
import { useHydrated } from 'remix-utils'

import { castEventsDate, type GroupedEvent, groupEvents } from '~/utils/events'
import type { DateItem } from '~/models/DateItem'

import { Accordion } from '../components/accordion'

interface EventsListProps<T extends DateItem & { id: string }> {
  events: Array<T>
  serverEvents: Array<GroupedEvent<T>>
  renderDetail(event: T): React.ReactNode
}

export const EventsList = <Events extends DateItem & { id: string }>({
  events,
  serverEvents,
  renderDetail,
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
                  className="odd:bg-white/5 even:bg-transparent p-3"
                  key={event.id}
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
