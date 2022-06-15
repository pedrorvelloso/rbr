export const eventDuration = (length: string) => {
  const regex = /([0-9]{0,2}h)?([0-9]{0,2}m)?/
  const timeRegex = length.match(regex)

  const [, hours, minutes, seconds] = timeRegex || []

  const h = hours ? ('00' + hours.replace('h', '')).slice(-2) : '00'
  const m = minutes ? ('00' + minutes.replace('m', '')).slice(-2) : '00'
  const s = seconds ? ('00' + seconds.replace('s', '')).slice(-2) : '00'

  return [h, m, s].filter(Boolean).join(':')
}
