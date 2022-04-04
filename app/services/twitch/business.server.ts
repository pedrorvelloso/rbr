import { twitch } from '~/config/env'

import { userList, gameList } from '~/utils/user-list'
import { HelixStreamsResponse, Stream } from './models/Stream'

export const fetchTwitch = async (
  resource: string,
  options?: RequestInit | undefined,
) => {
  const headers = {
    'Client-ID': twitch.clientId,
    Authorization: `Bearer ${twitch.appAccessToken}`,
  }

  return fetch(`${twitch.apiUrl}/${resource}`, { ...options, headers })
}

const buildUrlParams = (key: string, values: Array<string>) => {
  const params = new URLSearchParams()

  values.forEach((value) => params.append(key, value))

  return params.toString()
}

export const getStreams = async () => {
  const [userParams, gameParams, firstParams] = [
    buildUrlParams('user_login', userList),
    buildUrlParams('game_id', gameList),
    buildUrlParams('first', ['100']),
  ]

  const params = `?${userParams}&${gameParams}&${firstParams}`

  const response = await fetchTwitch(`streams${params}`)
  const { data }: HelixStreamsResponse = await response.json()

  return createStreamsResponse(data)
}

const createStreamsResponse = (data: HelixStreamsResponse['data']) =>
  data.map((dto) => new Stream(dto))
