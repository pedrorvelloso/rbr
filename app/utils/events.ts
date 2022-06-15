import { formatISO } from 'date-fns'
import { DateItem } from '~/models/DateItem'
import { formatDate } from '~/utils/dates'

export type GroupedEvent<T extends DateItem> = {
  date: string
  events: Array<T>
}

export const groupEvents = <T extends DateItem>(
  events: Array<T>,
  useStartTime = false,
): Array<GroupedEvent<T>> => {
  const groups: { [key: string]: Array<T> } = events.reduce<{
    [key: string]: Array<T>
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

export const castEventsDate = <T extends DateItem>(
  events: Array<T>,
): Array<T> => {
  return events.map((event) => ({
    ...event,
    start: formatISO(new Date(event.start), { representation: 'complete' }),
  }))
}
