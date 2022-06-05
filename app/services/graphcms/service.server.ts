import type { GetSubWikiQuery } from '~/generated/types'

import { graphcms } from '~/config/env.server'
import { createRequest } from '~/utils/request.server'
import type { GraphQLResponse, GraphQLRequestBody } from '~/utils/graphql'

import { getSubWiki } from './graphql'

const graphCMSRequest = createRequest(graphcms.apiUrl, {
  headers: {
    Authorization: `Bearer ${graphcms.token}`,
    'Content-Type': 'application/json',
  },
})

const fetchGraphCMS = async <T = any>(
  query: string,
  variables?: Record<string, any>,
) => {
  const body: GraphQLRequestBody = { query }

  if (variables) body.variables = variables

  const { data } = await graphCMSRequest<GraphQLResponse<T>>('/', {
    method: 'post',
    body: JSON.stringify(body),
  })

  return data
}

export const getSubWikiContent = async (slug: string) => {
  return await fetchGraphCMS<GetSubWikiQuery>(getSubWiki, { slug })
}
