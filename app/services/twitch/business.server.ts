import { twitch } from '~/config/env'

import { userList, gameList } from '~/utils/user-list'
import { type HelixStreamsResponse, Stream } from './models/Stream'
import { type HelixStreamersResponse, Streamer } from './models/Streamer'

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

export const getStreamers = async (usersOrId?: Array<string>, isId = false) => {
  const loginParams = buildUrlParams(
    isId ? 'id' : 'login',
    usersOrId || userList,
  )

  const response = await fetchTwitch(`users?${loginParams}`)
  const { data }: HelixStreamersResponse = await response.json()

  return createStreamersResponse(data)
}

export const getStreams = async (): Promise<Array<Stream>> => {
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

export const getStreamsWithStreamers = async (): Promise<Array<Stream>> => {
  console.log('fetching streams')
  const streams = await getStreams()
  const onlineStreamers = streams.map((stream) => stream.userId)
  const streamers =
    onlineStreamers.length > 0 ? await getStreamers(onlineStreamers, true) : []

  return createStreamsUnionStreamers(streams, streamers)
}

const createStreamsResponse = (data: HelixStreamsResponse['data']) =>
  data.map((dto) => new Stream(dto))

const createStreamersResponse = (data: HelixStreamersResponse['data']) =>
  data.map((dto) => new Streamer(dto))

const createStreamsUnionStreamers = (
  streams: Array<Stream>,
  streamers: Array<Streamer>,
): Array<Stream> =>
  streams.map((stream) => ({
    ...stream,
    profileImageUrl: streamers.find((streamer) => streamer.id === stream.userId)
      ?.profileImageUrl,
    login:
      streamers.find((streamer) => streamer.id === stream.userId)?.login ||
      stream.login,
  }))
