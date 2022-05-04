import { addDays, addHours } from 'date-fns'
import { google } from '~/config/env.server'

import { CalendarEvent, EventDTO, GoogleCalendarResponse } from './models/Event'
import { groupEvents } from './utils'

export const fetchGoogleCalendar = async <T>(
  resource: string,
  resourceParams?: URLSearchParams,
) => {
  const params = new URLSearchParams(resourceParams)
  params.set('key', google.key)

  const response = await fetch(
    `${google.apiUrl}/calendar/${google.version}/calendars/${
      google.calender.calendarId
    }/${resource}?${params.toString()}`,
  )
  const data: T = await response.json()

  return data
}

export const getEvents = async () => {
  // current time minus 4 hours (try to keep active events in list)
  const timeMin = addHours(new Date(), -4)
  // next 5 days
  const timeMax = addDays(timeMin, 7)

  const params = new URLSearchParams({
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    timeZone: 'America/Sao_Paulo',
    singleEvents: 'true',
    orderBy: 'startTime',
  })

  const response = await fetchGoogleCalendar<GoogleCalendarResponse>(
    'events',
    params,
  )
  const { items, timeZone } = response

  const eventsResponse = items.filter((event) => event.status === 'confirmed')
  const events = createEventResponse(eventsResponse)
  const groupedServerEvents = groupEvents(events)

  return { events, commonTimeZone: timeZone, groupedServerEvents }
}

export const createEventResponse = (data: Array<EventDTO>) => {
  return data.map((dto) => new CalendarEvent(dto))
}
