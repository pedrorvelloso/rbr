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
