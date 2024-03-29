import type { RestHandler, MockedRequest } from 'msw'
import { rest } from 'msw'

import { faker } from '@faker-js/faker'

import type {
  HelixStreamsResponse,
  HelixStreamersResponse,
  HelixVodsResponse,
} from '~/services/twitch/dtos'
import { twitch } from '~/config/env.server'

const streamsCount = Array.from({ length: 4 }, (_, i) => i + 1)

const twitchHandlers: Array<RestHandler<MockedRequest>> = [
  rest.get(`${twitch.apiUrl}/streams`, async (_req, res, ctx) => {
    const data: HelixStreamsResponse['data'] = streamsCount.map((i) => ({
      id: i.toString(),
      user_id: i.toString(),
      user_login: faker.internet.userName(),
      user_name: faker.name.firstName(),
      type: 'live',
      title: faker.lorem.sentence(4),
      viewer_count: faker.datatype.number({ min: 0, max: 100 }),
      started_at: faker.date.recent(1).toISOString(),
      language: 'pt',
      thumbnail_url:
        'https://vod-secure.twitch.tv/_404/404_processing_{width}x{height}.png',
      tag_ids: [],
      is_mature: false,
      game_id: '11557',
      game_name: 'The Legend of Zelda: Ocarina of Time',
    }))

    await new Promise((r) => setTimeout(r, 1300))

    return res(ctx.status(200), ctx.json({ data }))
  }),
  rest.get(`${twitch.apiUrl}/users`, (req, res, ctx) => {
    const idParams = req.url.searchParams.getAll('id')
    const streamers: HelixStreamersResponse['data'] = idParams.map((id) => ({
      id,
      login: faker.internet.userName(),
      display_name: faker.name.firstName(),
      type: '',
      broadcaster_type: 'affiliate',
      description: faker.lorem.sentence(),
      profile_image_url:
        'https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png',
      offline_image_url: '',
      view_count: 0,
      created_at: faker.date.past().toISOString(),
      email: faker.internet.email(),
    }))

    return res(ctx.status(200), ctx.json({ data: streamers }))
  }),
  rest.get(`${twitch.apiUrl}/videos`, (req, res, ctx) => {
    const data: HelixVodsResponse['data'] = streamsCount.map((i) => ({
      id: i.toString(),
      user_id: i.toString(),
      user_login: 'randobrasil',
      duration: '4h20m00s',
      published_at: faker.date.recent(5).toISOString(),
      thumbnail_url:
        'https://vod-secure.twitch.tv/_404/404_processing_320x180.png',
      title: faker.lorem.sentence(4),
      url: 'https://www.twitch.tv/videos/1421867597',
      view_count: faker.datatype.number({ min: 0, max: 100 }),
    }))

    return res(ctx.status(200), ctx.json({ data }))
  }),
]

export { twitchHandlers }
