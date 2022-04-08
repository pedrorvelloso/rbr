import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'

import tailwindCss from '~/styles/tailwind.css'

import { getSeo } from './utils/seo'
import { getDomainUrl, getUrl } from './utils/misc'

import { Heading } from './ui/components/typograph'
import { Layout } from './ui/compositions/layout'

export type RootLoaderData = {
  url: {
    origin: string
    path: string
  }
}

export const meta: MetaFunction = ({ data }) => {
  const { url } = data as RootLoaderData

  return {
    ...getSeo({
      keywords: 'Randomizer, Brasil, Rando, OoTR, MMR, ALLTPR',
      url: getUrl(url),
      origin: url.origin,
    }),
    charSet: 'utf-8',
  }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
]

export const loader: LoaderFunction = ({ request }) => {
  return json<RootLoaderData>(
    {
      url: {
        origin: getDomainUrl(request),
        path: new URL(request.url).pathname,
      },
    },
    {
      headers: {
        'Cache-Control': 'max-age=365000000, immutable',
      },
    },
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-dark text-neutral-300">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
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
        <body className="bg-dark text-neutral-300">
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
      <body className="bg-dark text-neutral-300">
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
