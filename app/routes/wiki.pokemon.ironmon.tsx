import { useMemo } from 'react'

import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getMDXComponent } from 'mdx-bundler/client'

import { compileMdx } from '~/server/mdx.server'
import { ironmonMdx } from '~/wiki/pokemon/ironmon'

export const loader: LoaderFunction = async () => {
  const { code } = await compileMdx(ironmonMdx.trim())

  return json({ code })
}

const PokemonIronmonPage = () => {
  const { code } = useLoaderData()

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="mx-auto prose prose-invert">
      <Component />
    </div>
  )
}

export default PokemonIronmonPage
