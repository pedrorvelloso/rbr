import { useMemo } from 'react'

import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getMDXComponent } from 'mdx-bundler/client'

import { compileMdx } from '~/server/mdx.server'

import { getSubWikiContent } from '~/services/graphcms/service.server'

type SubWikiPageLoaderData = {
  code: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.wiki + '/' + params['*']
  const { data } = await getSubWikiContent(slug)

  if (!data.subWiki) throw json({ message: 'not found' }, { status: 404 })

  const { code } = await compileMdx(data.subWiki.content)

  return json<SubWikiPageLoaderData>({ code })
}

const SubWikiPage = () => {
  const { code } = useLoaderData<SubWikiPageLoaderData>()

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="mx-auto prose prose-invert prose-table:w-max prose-table:max-w-full prose-table:overflow-auto prose-td:py-2 prose-td:px-3 prose-th:py-2 prose-th:px-3 prose-table:block prose-table:text-base">
      <Component />
    </div>
  )
}

export default SubWikiPage
