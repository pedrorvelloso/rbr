import { format, intervalToDuration, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const duration = (date: string) => {
  const { hours, minutes } = intervalToDuration({
    start: Date.parse(date),
    end: Date.now(),
  })

  const mins = `00${minutes}`.slice(-2)

  return `${hours}:${mins}`
}

export const formatDate = (date: string) => {
  return format(parseISO(date), 'PP', { locale: ptBR })
}
