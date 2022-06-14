import { DateItem } from '~/models/DateItem'
import { formatTz } from '~/utils/dates'

import { ItemDTO } from './dtos'

export class ScheduleItem implements DateItem {
  length: string
  serverStartTime: string
  title: string
  description: string
  runner: string
  dateTime: string
  start: string
  timeZone: string

  constructor(item: ItemDTO, timezone: string) {
    const [title, description, runner] = item.data

    this.length = item.length
    this.title = title
    this.description = description
    this.runner = runner
    this.timeZone = timezone
    this.start = new Date(item.scheduled).toISOString()
    this.dateTime = item.scheduled
    this.serverStartTime = formatTz(this.start, 'HH:mm', this.timeZone)
  }
}
