import type { GraphQLRequestBody, GraphQLResponse } from './graphql'

type RequestParamsInit = Record<string, string | Array<string>>

interface RequestOptions {
  method?: 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch'
  headers?: HeadersInit
  params?: RequestParamsInit
  body?: BodyInit
}

const buildUrlParams = (params: RequestParamsInit) => {
  const urlParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => urlParams.append(key, v))
    } else {
      urlParams.append(key, value)
    }
  })

  return urlParams.toString()
}

/**
 * Creates a `http` request
 * @param url the url to fetch
 * @param options http options
 * @return http response
 */
export const request = async <T = any>(
  url: string,
  options?: RequestOptions,
) => {
  const fetchUrl = `${url}${
    options?.params ? `?${buildUrlParams(options.params)}` : ''
  }`.replace(/\/$/, '')

  const response = await fetch(fetchUrl, {
    ...options,
  })

  const data: T = await response.json()
  const status = response.status

  return { data, status }
}

const mergeOptions = (
  defaultOptions?: RequestOptions,
  options?: RequestOptions,
): RequestOptions | undefined => {
  if (!options) return defaultOptions

  const headers = { ...defaultOptions?.headers, ...options?.headers }
  const params =
    defaultOptions?.params || options?.params
      ? { ...defaultOptions?.params, ...options?.params }
      : undefined

  return { ...defaultOptions, ...options, headers, params }
}

/**
 * Create a `request` fuction
 * @param baseUrl base url to fetch from
 * @param defaultOptions default http options to use
 * @return a function that can be used to fetch data from the base url
 */
export const createRequest = (
  baseUrl: string,
  defaultOptions?: RequestOptions,
) => {
  /**
   * Creates a `http` request
   * @param url the url to fetch
   * @param options http options
   * @return http response
   */
  return <T = any>(url: string, options?: RequestOptions) =>
    request<T>(
      `${baseUrl}/${url.replace(/^\/$/g, '')}`,
      mergeOptions(defaultOptions, options),
    )
}

export const createGraphQLRequest = (
  baseUrl: string,
  defaultOptions?: RequestOptions,
) => {
  const graphqlRequest = createRequest(baseUrl, {
    ...defaultOptions,
  })

  const requestGraphQL = async <T = any>(
    query: string,
    variables?: Record<string, any>,
  ) => {
    const body: GraphQLRequestBody = { query }

    if (variables) body.variables = variables

    const { data } = await graphqlRequest<GraphQLResponse<T>>('/', {
      method: 'post',
      body: JSON.stringify(body),
    })

    return data
  }

  return requestGraphQL
}
