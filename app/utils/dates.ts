import { format, intervalToDuration, parseISO } from 'date-fns'
import { format as fTz, utcToZonedTime } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale'

export const duration = (date: string) => {
  const { hours, minutes } = intervalToDuration({
    start: Date.parse(date),
    end: Date.now(),
  })

  const mins = `00${minutes}`.slice(-2)

  return `${hours}:${mins}`
}

export const formatDate = (date: string, formatter = 'PP') => {
  return format(parseISO(date), formatter, { locale: ptBR })
}

export const formatTz = (date: string, formatter = 'PP', timezone: string) => {
  const zonedDate = utcToZonedTime(date, timezone)

  return fTz(zonedDate, formatter, { timeZone: timezone, locale: ptBR })
}
