import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

// redirect to discord invite :D
export const loader: LoaderFunction = () => {
  return redirect('https://discord.gg/KTAYuY8M4b')
}
