import { addDays, addHours } from 'date-fns'
import { google } from '~/config/env.server'

import { createRequest } from '~/utils/request.server'
import { groupEvents } from '~/utils/events'

import { CalendarEvent } from './models'
import type { EventDTO, GoogleCalendarResponse } from './dtos'

const fetchGoogleCalendar = createRequest(
  `${google.apiUrl}/calendar/${google.version}/calendars/${google.calender.calendarId}`,
  {
    params: {
      key: google.key,
    },
  },
)

export const getEvents = async () => {
  // current time minus 4 hours (try to keep active events in list)
  const timeMin = addHours(new Date(), -4)
  // next 5 days
  const timeMax = addDays(timeMin, 7)

  const params = {
    timeMin: timeMin.toISOString(),
    timeMax: timeMax.toISOString(),
    timeZone: 'America/Sao_Paulo',
    singleEvents: 'true',
    orderBy: 'startTime',
  }

  const {
    data: { items, timeZone },
  } = await fetchGoogleCalendar<GoogleCalendarResponse>('events', { params })

  const eventsResponse = items.filter((event) => event.status === 'confirmed')
  const events = createEventResponse(eventsResponse)
  const groupedServerEvents = groupEvents(events)

  return { events, commonTimeZone: timeZone, groupedServerEvents }
}

export const createEventResponse = (data: Array<EventDTO>) => {
  return data.map((dto) => new CalendarEvent(dto))
}
