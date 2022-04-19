export const isLongEnough = (length: string) => {
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
