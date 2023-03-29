import { ActionArgs, json } from '@remix-run/node'
import { verify } from '~/utils/upstash.server'
import { getDomainUrl, getEnv } from '~/utils/misc'
import { redis } from '~/utils/redis.server'
import { getTwitchAccessToken } from '~/services/twitch/service.server'

export const loader = () => {
  return json({ message: 'not found' }, { status: 404 })
}

export const action = async ({ request }: ActionArgs) => {
  const signature =
    request.headers.get('upstash-signature') ||
    request.headers.get('Upstash-Signature')

  const body = await request.text()

  if (!signature) throw new Error('missing something')

  const url = getDomainUrl(request) + '/api/refresh-twitch-key'

  // this will verify qstash signature when produtcion
  await verify(
    signature,
    getEnv('QSTASH_CURRENT_SIGNING_KEY'),
    body,
    url,
  ).catch((err) => {
    console.error(`Failed to verify signature with current signing key: ${err}`)
    return verify(signature, getEnv('QSTASH_NEXT_SIGNING_KEY'), body, url)
  })

  const twitchKey = await getTwitchAccessToken()
  await redis.set('twitch-key', twitchKey)

  return { message: 'ok' }
}
