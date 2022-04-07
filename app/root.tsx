import type { MetaFunction, LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import tailwindCss from '~/styles/tailwind.css'

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
