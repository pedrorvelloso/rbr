import { intervalToDuration } from 'date-fns'

export const duration = (date: string) => {
  const { hours, minutes } = intervalToDuration({
    start: Date.parse(date),
    end: Date.now(),
  })

  const mins = `00${minutes}`.slice(-2)

  return `${hours}:${mins}`
}
