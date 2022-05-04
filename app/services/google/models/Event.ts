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
  start: string
  serverStartTime: string
  dateTime: string

  constructor(event: EventDTO) {
    this.id = event.id
    this.summary = event.summary
    this.description = event.description
    this.status = event.status
    // since this is a brazil based calendar we can default to sao paulo
    // if it comes empty from the request
    this.timeZone = event.start?.timeZone ?? 'America/Sao_Paulo'
    // create date and convert to ISO date so we can convert in
    // client side
    this.start = new Date(event.start?.dateTime || '').toISOString()
    // this assures we can fallback to default calendar timezone
    // if client cannot convert to user timezone
    this.serverStartTime = formatTz(this.start, 'HH:mm', this.timeZone)
    this.dateTime = event.start?.dateTime || ''
  }
}
