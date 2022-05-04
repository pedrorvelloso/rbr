import { useState, useEffect } from 'react'
import { useHydrated } from 'remix-utils'

import type { CalendarEvent } from '~/services/google/models/Event'
import {
  castEventsDate,
  type GroupedEvent,
  groupEvents,
} from '~/services/google/utils'

import { Accordion } from '../components/accordion'
import { EventDetail } from '../components/event-detail'

interface EventsListProps {
  events: Array<CalendarEvent>
  serverEvents: Array<GroupedEvent>
}

export const EventsList: React.FC<EventsListProps> = ({
  events,
  serverEvents,
}) => {
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
        </Accordion>
      ))}
    </div>
  )
}
