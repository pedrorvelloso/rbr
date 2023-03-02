export const getEnv = (key: string, devValue = `${key}-dev`) => {
  let value = devValue
  const env = process.env[key]

  if (env) value = env
  else if (process.env.NODE_ENV === 'production')
    throw new Error(`${key} env must be set`)

  return value
}

export const env = (enviroment: 'production' | 'development') => {
  return process.env.NODE_ENV === enviroment
}

export const getOrigin = (url: string) => {
  const origin = new URL(url).origin

  return origin
}

export const getDomainUrl = (request: Request) => {
  const host = request.headers.get('host')

  if (!host) throw new Error('could not get hostname')

  const protocol = host.includes('localhost') ? 'http' : 'https'

  return `${protocol}://${host}`
}

export const getUrl = (url: { origin: string; path: string }) => {
  return `${url.origin}${url.path}`
}

export const spliceIntoChunks = <T>(arr: T[], chunkSize: number) => {
  const res = []
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize)
    res.push(chunk)
  }
  return res
}
