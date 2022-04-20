export const isVodLongEnough = (length: string) => {
  const regex = /([0-8]{0,2}h)?([0-8]{0,2}m)/
  const timeRegex = length.match(regex)

  const [, hours, minutes] = timeRegex || []

  if (hours) return true

  if (minutes) {
    const min = parseInt(minutes.replace('m', ''))

    return min >= 45
  }

  return false
}

export const vodDuration = (length: string) => {
  const regex = /([0-9]{0,2}h)?([0-9]{0,2}m)?([0-9]{0,2}s)/
  const timeRegex = length.match(regex)

  const [, hours, minutes, seconds] = timeRegex || []

  const h = hours ? hours.replace('h', '') : null
  const m = minutes ? ('00' + minutes.replace('m', '')).slice(-2) : null
  const s = seconds ? ('00' + seconds.replace('s', '')).slice(-2) : '00'

  return [h, m, s].filter(Boolean).join(':')
}
