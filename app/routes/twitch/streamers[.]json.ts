import type { LoaderFunction } from '@remix-run/node'
import { userList } from '~/utils/resource-list'

export const loader: LoaderFunction = () => {
  // remove test user and stringify json
  const string = JSON.stringify(userList.filter((user) => user !== 'ilherdev'))

  return new Response(string, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(Buffer.byteLength(string)),
    },
  })
}
