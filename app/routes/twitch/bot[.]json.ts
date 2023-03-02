import type { LoaderFunction } from '@remix-run/node'
import { db } from '~/utils/db.server'

export const loader: LoaderFunction = async () => {
  const usersList = await db.streamer.findMany()

  const string = JSON.stringify(usersList.map((user) => user.stream))

  return new Response(string, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(Buffer.byteLength(string)),
    },
  })
}
