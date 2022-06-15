import { DateItem } from '~/models/DateItem'
import { formatTz } from '~/utils/dates'

import { ItemDTO } from './dtos'
import { eventDuration } from './utils'

export class ScheduleItem implements DateItem {
  id: string
  length: string
  serverStartTime: string
  title: string | null
  description: string | null
  runner: string | null
  dateTime: string
  start: string
  timeZone: string

  constructor(item: ItemDTO, timezone: string) {
    const [title, description, runner] = item.data

    this.id = item.scheduled_t.toString()
    this.length = eventDuration(item.length.replace('PT', '').toLowerCase())
    this.title = title
    this.description = description
    this.runner = runner
    this.timeZone = timezone
    this.start = new Date(item.scheduled).toISOString()
    this.dateTime = item.scheduled
    this.serverStartTime = formatTz(this.start, 'HH:mm', this.timeZone)
  }
}
