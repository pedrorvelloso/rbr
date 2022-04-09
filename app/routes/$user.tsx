import type { LoaderFunction } from '@remix-run/node'
import { redirect, json } from '@remix-run/node'

import { userList } from '~/utils/user-list'

import { Heading } from '~/ui/components/typograph'

export const loader: LoaderFunction = ({ params }) => {
  const userParam = params.user

  const isOnList =
    userParam && userList.find((user) => user === userParam.toLowerCase())

  if (!isOnList) {
    throw json({ message: 'User not found' }, { status: 404 })
  }

  return redirect(`https://twitch.tv/${isOnList}`)
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
