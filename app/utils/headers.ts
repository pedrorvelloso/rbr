import type { HeadersFunction } from '@remix-run/node'

export const getHeaders: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  const controlCache = loaderHeaders.get('Cache-Control')

  headers.set('Cache-Control', controlCache!)

  return headers
}

export const SMaxAge = (s: number) => ({
  'Cache-Control': `s-maxage=${s}`,
})
