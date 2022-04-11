import type { LoaderFunction } from '@remix-run/node'
import * as gtag from '~/utils/gtags'

export const loader: LoaderFunction = () => {
  const script = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gtag.GA_TRACKING_ID}');`
  return new Response(script, {
    headers: {
      'Content-Type': 'text/javascript',
    },
  })
}
