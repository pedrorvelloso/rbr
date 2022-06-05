import type { GetSubWikiQuery } from '~/generated/types'

import { graphcms } from '~/config/env.server'
import { createGraphQLRequest } from '~/utils/request.server'

import { getSubWiki } from './graphql'

const fetchGraphCMS = createGraphQLRequest(graphcms.apiUrl, {
  headers: {
    Authorization: `Bearer ${graphcms.token}`,
    'Content-Type': 'application/json',
  },
})

export const getSubWikiContent = async (slug: string) => {
  return await fetchGraphCMS<GetSubWikiQuery>(getSubWiki, { slug })
}
