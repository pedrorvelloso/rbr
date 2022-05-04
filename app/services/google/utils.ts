import { formatISO } from 'date-fns'
import { formatDate } from '~/utils/dates'
import { CalendarEvent } from './models/Event'

export type GroupedEvent = {
  date: string
  events: Array<CalendarEvent>
}

export const groupEvents = (
  events: Array<CalendarEvent>,
  useStartTime = false,
): Array<GroupedEvent> => {
  const groups: { [key: string]: Array<CalendarEvent> } = events.reduce<{
    [key: string]: Array<CalendarEvent>
  }>((groups, event) => {
    const date = useStartTime
      ? event.start.split('T')[0]
      : event.dateTime.split('T')[0]
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(event)
    return groups
  }, {})

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date: formatDate(date, 'PPPP'),
      events: groups[date],
    }
  })

  return groupArrays
}

export const castEventsDate = (
  events: Array<CalendarEvent>,
): Array<CalendarEvent> => {
  return events.map((event) => ({
    ...event,
    start: formatISO(new Date(event.start), { representation: 'complete' }),
  }))
}
