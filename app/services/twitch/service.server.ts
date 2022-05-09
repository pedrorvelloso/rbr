import { twitch } from '~/config/env.server'

import { userList, gameList } from '~/utils/resource-list'
import { createRequest } from '~/utils/request.server'

import { Stream, Streamer, Vod } from './models'
import type {
  HelixStreamersResponse,
  HelixStreamsResponse,
  HelixVodsResponse,
} from './dtos'

import { isVodLongEnough } from './utils'

const fetchTwitch = createRequest(twitch.apiUrl, {
  headers: {
    'Client-ID': twitch.clientId,
    Authorization: `Bearer ${twitch.appAccessToken}`,
  },
})

export const getStreamers = async (usersOrId?: Array<string>, isId = false) => {
  const {
    data: { data },
  } = await fetchTwitch<HelixStreamersResponse>('users', {
    params: {
      [isId ? 'id' : 'login']: usersOrId || userList,
    },
  })

  return createStreamersResponse(data)
}

export const getStreams = async (): Promise<Array<Stream>> => {
  const {
    data: { data },
  } = await fetchTwitch<HelixStreamsResponse>('streams', {
    params: {
      user_login: userList,
      game_id: gameList,
      first: '100',
    },
  })

  return createStreamsResponse(data)
}

export const getStreamsWithStreamers = async (): Promise<Array<Stream>> => {
  // for now we're not having more than 100 users
  // when we reach that number we'll need to break down the
  // user array into chunks and do multiple requests
  // to fullfill all users
  const streams = await getStreams()
  const onlineStreamers = streams.map((stream) => stream.userId)
  const streamers =
    onlineStreamers.length > 0 ? await getStreamers(onlineStreamers, true) : []

  return createStreamsUnionStreamers(streams, streamers)
}

export const getVideos = async (userId: string) => {
  const {
    data: { data },
  } = await fetchTwitch<HelixVodsResponse>('videos', {
    params: {
      user_id: userId,
      first: '15',
    },
  })

  const vods = data.filter((vod) => isVodLongEnough(vod.duration)).splice(0, 4)

  return createVodsResponse(vods)
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

const createVodsResponse = (data: HelixVodsResponse['data']) =>
  data.map((dto) => new Vod(dto))
