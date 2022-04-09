import type { LoaderFunction } from '@remix-run/node'
import { redirect, json } from '@remix-run/node'

import { userList } from '~/utils/user-list'

import { Heading } from '~/ui/components/typograph'

export const loader: LoaderFunction = ({ params }) => {
  const isOnList = userList.find((user) => user === params.user)

  if (!isOnList) {
    throw json({ message: 'User not found' }, { status: 404 })
  }

  return redirect(`https://twitch.tv/${params.user}`)
}

const User = () => {
  return <>WHAT?</>
}

export const CatchBoundary = () => {
  return (
    <>
      <Heading>Página não encontrada</Heading>
      <p>
        Essa página não vai carregar! Não adianta nem tentar randomizar uma
        página.
      </p>
    </>
  )
}

export default User
