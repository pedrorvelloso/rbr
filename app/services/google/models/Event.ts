import { formatTz } from '~/utils/dates'

export interface EventDTO {
  id: string
  summary: string
  description: string
  status: 'confirmed' | 'tentative' | 'cancelled'
  start?: {
    dateTime: string
    timeZone: string
  }
}

export interface GoogleCalendarResponse {
  items: Array<EventDTO>
  timeZone: string
}

export class CalendarEvent {
  id: string
  summary: string
  timeZone: string
  description: string
  status: 'confirmed' | 'tentative' | 'cancelled'
  start: Date
  serverDefaultStart: string

  constructor(event: EventDTO) {
    this.id = event.id
    this.summary = event.summary
    this.description = event.description
    this.status = event.status
    // since this is a brazil based calendar we can default to sao paulo
    // if it comes empty from the request
    this.timeZone = event.start?.timeZone ?? 'America/Sao_Paulo'
    this.start = new Date(event.start?.dateTime || '')
    // this assures we can fallback to default calendar timezone
    // if client cannot convert to user timezone
    this.serverDefaultStart = formatTz(
      this.start.toISOString(),
      'Pp',
      this.timeZone,
    )
  }
}
