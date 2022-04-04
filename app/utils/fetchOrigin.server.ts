import { getOrigin } from './misc'

export const fetchFromOrigin = async (resource: string, request: Request) => {
  const origin = getOrigin(request.url)

  return fetch(`${origin}/${resource}`)
}
