import { ItemDTO, ScheduleDTO } from './dtos'
import { ScheduleItem } from './models'
import schedule from './schedule.json'

export const getSchedule = () => {
  const festival = schedule as ScheduleDTO

  const {
    schedule: { items, timezone },
  } = festival

  return createScheduleResponse(items, timezone)
}

const createScheduleResponse = (data: Array<ItemDTO>, timezone: string) =>
  data.map((dto) => new ScheduleItem(dto, timezone))
