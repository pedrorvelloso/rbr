type RequestParamsInit = Record<string, string | Array<string>>

interface RequestOptions {
  method?: 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch'
  headers?: HeadersInit
  params?: RequestParamsInit
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
  }`

  const response = await fetch(fetchUrl, {
    method: options?.method,
    headers: options?.headers,
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
  const params = { ...defaultOptions?.params, ...options?.params }

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
