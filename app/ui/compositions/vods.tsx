import { ClientOnly } from 'remix-utils'

import type { Vod } from '~/services/twitch/models/Vod'

import { formatDate } from '~/utils/dates'

import { Anchor } from '../components/anchor'
import { Directory } from '../components/directory'
import { Heading } from '../components/typograph'
import { VideoCard } from '../components/video-card'

interface VodsProps {
  data: Array<Vod>
}

export const Vods = ({ data }: VodsProps) => {
  return (
    <Directory
      title={
        <Heading className="font-bold">Assista mais de RandoBrasil</Heading>
      }
    >
      {data.map((vod) => (
        <VideoCard
          title={vod.title}
          href={vod.url}
          viewCount={vod.viewCount}
          time={vod.duration}
          thumbnailUrl={vod.thumbnailUrl}
          key={vod.id}
        >
          <div className="flex flex-col gap-x-3">
            <Anchor
              href={vod.url}
              target="_blank"
              className="hover:text-primary"
            >
              <Heading
                size="heading3"
                className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold"
                title={vod.title}
              >
                {vod.title}
              </Heading>
            </Anchor>
            {/* client only date to prevent hydratation errors from the server. keep correct local date */}
            <ClientOnly
              fallback={
                <div className="bg-gray-400/30 h-[13px] w-20 animate-pulse backdrop-blur-sm" />
              }
            >
              {() => (
                <p className="text-[13px] text-neutral-400">
                  {formatDate(vod.publishedAt)}
                </p>
              )}
            </ClientOnly>
          </div>
        </VideoCard>
      ))}
    </Directory>
  )
}
