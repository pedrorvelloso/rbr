import type { ApolloError } from 'apollo-server-errors'

export type GraphQLRequestBody = {
  query: string
  variables?: Record<string, any>
}

export type GraphQLResponse<T> = {
  data: T
  errors?: Array<ApolloError>
}

export const gql = String.raw
