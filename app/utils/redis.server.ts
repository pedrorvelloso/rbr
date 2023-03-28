import type { Redis as RedisType } from 'ioredis'
import Redis from 'ioredis'
import { getEnv } from './misc'

let redis: RedisType

declare global {
  // eslint-disable-next-line no-var
  var __redis: RedisType | undefined
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the Redis with every change either.
if (process.env.NODE_ENV === 'production') {
  redis = new Redis(getEnv('REDIS_URL'))
} else {
  if (!global.__redis) {
    global.__redis = new Redis(getEnv('REDIS_URL'))
  }
  redis = global.__redis
}

export { redis }
