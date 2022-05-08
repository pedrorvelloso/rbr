import { setupServer } from 'msw/node'

import { twitchHandlers } from './twitch'

const server = setupServer(...twitchHandlers)

server.listen({ onUnhandledRequest: 'bypass' })
console.info('🔶 Mock server running')

process.once('SIGINT', () => server.close())
process.once('SIGTERM', () => server.close())
