export interface ItemDTO {
  length: string
  length_t: number
  scheduled: string
  scheduled_t: number
  data: Array<string>
}

export interface ScheduleDTO {
  schedule: {
    items: Array<ItemDTO>
    start: string
    start_t: number
    timezone: string
  }
}
