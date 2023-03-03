import { ClientOnly } from 'remix-utils'

import type { Vod } from '~/services/twitch/models'

import { formatDate } from '~/utils/dates'

import { Directory } from '../components/directory'
import { Heading } from '../components/typograph'
import { VideoCard } from '../components/v2/video-card'

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
          <div className="flex gap-x-3 px-4 pt-4">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/7e2e4f5c-e8fe-485e-9a06-fea5f5d9b5d9-profile_image-300x300.png"
              alt="Randomizer Brasil"
              className="h-[52px] rounded-full"
              height={52}
              width={52}
            />
            <span className="min-w-0 flex flex-col justify-center">
              <Heading
                size="heading3"
                className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold"
                title={vod.title}
              >
                {vod.title}
              </Heading>
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
            </span>
          </div>
        </VideoCard>
      ))}
    </Directory>
  )
}
