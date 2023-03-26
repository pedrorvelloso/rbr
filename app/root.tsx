import { useEffect } from 'react'
import type { MetaFunction, LinksFunction, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
  useRevalidator,
  useTransition,
} from '@remix-run/react'

import tailwindCss from '~/styles/tailwind.css'
import noScriptCss from '~/styles/no-script.css'

import { getSeo } from './utils/seo'
import { env, getDomainUrl, getEnv, getUrl } from './utils/misc'
import * as gtag from '~/utils/gtags'

import { Heading } from './ui/components/typograph'
import { Layout } from './ui/compositions/layout'
import { Spinner } from './ui/components/spinner'

export type RootLoaderData = {
  url: {
    origin: string
    path: string
  }
  gaTrackingId: string
}

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return {
      charSet: 'utf-8',
      title: 'Página não Randomizada!',
    }
  }

  const { url } = data as RootLoaderData

  return {
    charSet: 'utf-8',
    ...getSeo({
      keywords: 'Randomizer, Brasil, Rando, OoTR, MMR, ALLTPR',
      url: getUrl(url),
      origin: url.origin,
    }),
  }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet preload', href: tailwindCss, as: 'style' },
]

export const loader = ({ request }: LoaderArgs) => {
  const gaTrackingId = getEnv('GA_TRACKING_ID')

  return json<RootLoaderData>({
    url: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
    gaTrackingId,
  })
}

// this make sure that we never reload root data when reloading for new streams
export const shouldRevalidate = () => false

export default function App() {
  const location = useLocation()
  const transition = useTransition()
  const revalidator = useRevalidator()
  const { gaTrackingId } = useLoaderData<typeof loader>()

  useEffect(() => {
    if (gaTrackingId.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [gaTrackingId, location])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <noscript>
          <link rel="stylesheet" href={noScriptCss} />
        </noscript>
      </head>
      <body className="bg-purple-900 text-neutral-300">
        <Layout>
          <Outlet />
          <Spinner
            isLoading={
              transition.state === 'loading' || revalidator.state === 'loading'
            }
          />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {env('development') ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </>
        )}
        <LiveReload />
      </body>
    </html>
  )
}

export const CatchBoundary = () => {
  const caught = useCatch()

  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-purple-900 text-neutral-300">
          <Layout>
            <Heading>Página não encontrada</Heading>
            <p>
              Essa página não vai carregar! Não adianta nem tentar randomizar
              uma página.
            </p>
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
}

export const ErrorBoundary = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-purple-900 text-neutral-300">
        <Layout>
          <Heading>Algo de errado aconteceu</Heading>
          <p>Se o erro persistir entre em contato com alguem no discord!</p>
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
