import { getUnixTime } from 'date-fns'

import { groupEvents } from '~/utils/events'

import { ItemDTO, ScheduleDTO } from './dtos'
import { ScheduleItem } from './models'
import schedule from './schedule.json'

export const getSchedule = () => {
  const festival = schedule as ScheduleDTO

  const {
    schedule: { items, timezone },
  } = festival

  const events = createScheduleResponse(items, timezone)
  const groupedServerEvents = groupEvents(events)

  const now = getUnixTime(new Date())

  const liveNow = items.find((event, index) => {
    const hasNext = index < items.length - 1
    const next = items[index + 1]

    return (
      now >= event.scheduled_t &&
      (hasNext
        ? now < next.scheduled_t
        : now < event.scheduled_t + event.length_t)
    )
  })

  const liveNowIndex = items.indexOf(liveNow!)
  const nextUp = liveNowIndex > -1 ? items.at(liveNowIndex + 1) : undefined

  return {
    events,
    commonTimeZone: timezone,
    groupedServerEvents,
    liveNow: liveNow && new ScheduleItem(liveNow, timezone),
    nextUp: nextUp && new ScheduleItem(nextUp, timezone),
  }
}

const createScheduleResponse = (data: Array<ItemDTO>, timezone: string) =>
  data.map((dto) => new ScheduleItem(dto, timezone))
