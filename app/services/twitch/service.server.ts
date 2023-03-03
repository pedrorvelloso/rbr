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
import { db } from '~/utils/db.server'
import { spliceIntoChunks } from '~/utils/misc'

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
  const usersList = await db.streamer.findMany()
  // Dedupe users from static list and db list
  // TODO this should be removed once bot is stable
  const users = [
    ...new Set([...usersList.map((user) => user.stream), ...userList]),
  ]

  const usersChunk = spliceIntoChunks(users, 100)
  const response = await Promise.all(
    usersChunk.map(async (chunk) => {
      const {
        data: { data },
      } = await fetchTwitch<HelixStreamsResponse>('streams', {
        params: {
          user_login: chunk,
          game_id: gameList,
          first: '100',
        },
      })

      return data
    }),
  )

  return createStreamsResponse(response.flatMap((streams) => streams))
}

export const getStreamsWithStreamers = async (): Promise<Array<Stream>> => {
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
      type: 'highlight',
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
