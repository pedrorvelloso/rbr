import { getEnv } from '~/utils/misc'

export const twitch = {
  clientId: getEnv('TWITCH_CLIENT_ID'),
  appAccessToken: getEnv('TWITCH_APP_ACCESS_TOKEN'),
  apiUrl: getEnv('TWITCH_API_URL'),
}

export const google = {
  apiUrl: getEnv('GOOGLE_API_URL'),
  version: getEnv('GOOGLE_API_VERSION'),
  key: getEnv('GOOGLE_KEY'),
  calender: {
    calendarId: getEnv('GOOGLE_CALENDAR_ID'),
  },
}
