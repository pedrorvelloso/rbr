interface GetSeoOptions {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url: string
  origin: string
}

export const getSeo = ({
  title = 'Randomizer Brasil',
  description = 'Assista aos melhores jogadores de Randomizer do Brasil',
  keywords = '',
  url,
  origin,
  image = getSeoImage({ origin }),
}: GetSeoOptions) => ({
  title,
  description,
  viewport: 'width=device-width,initial-scale=1',
  keywords,
  'og:url': url,
  'og:title': title,
  'og:description': description,
  'og:type': 'website',
  'og:image': image,
  'og:image:alt': title,
  'twitter:card': image ? 'summary_large_image' : 'sumamry',
  'twitter:image': image,
  'twitter:creator': '@randobrasil',
  'twitter:site': '@randobrasil',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:alt': title,
})

interface GetSeoImageOptions {
  origin: string
}

export const getSeoImage = ({ origin }: GetSeoImageOptions) => {
  return `${origin}/images/social-rbr.png`
}
