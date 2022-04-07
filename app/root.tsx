import type { MetaFunction, LinksFunction } from '@remix-run/node'
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
import { Heading } from './ui/components/typograph'

import { Layout } from './ui/compositions/layout'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Randomizer Brasil',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
]

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
