import { getUnixTime } from 'date-fns'

import { groupEvents } from '~/utils/events'
import { request } from '~/utils/request.server'

import { ItemDTO, ScheduleDTO } from './dtos'
import { ScheduleItem } from './models'

export const getSchedule = async () => {
  const { data: festival } = await request<ScheduleDTO>(
    'https://horaro.org/festivalrando/agenda.json?named=true',
  )

  const {
    schedule: { items, timezone, setup_t },
  } = festival

  const events = createScheduleResponse(items, timezone)
  const groupedServerEvents = groupEvents(events)

  const now = getUnixTime(new Date())

  const liveNow = items.find(
    (event) =>
      now >= event.scheduled_t &&
      now < event.scheduled_t + event.length_t + setup_t,
  )

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
