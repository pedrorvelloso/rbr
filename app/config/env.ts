import { getEnv } from '~/utils/misc'

export const twitch = {
  clientId: getEnv('TWITCH_CLIENT_ID'),
  appAccessToken: getEnv('TWITCH_APP_ACCESS_TOKEN'),
  apiUrl: getEnv('TWITCH_API_URL'),
}
