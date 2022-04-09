import type { Vod } from '~/services/twitch/models/Vod'
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
          <Anchor href={vod.url} target="_blank" className="hover:text-primary">
            <Heading
              size="heading3"
              className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold"
              title={vod.title}
            >
              {vod.title}
            </Heading>
          </Anchor>
        </VideoCard>
      ))}
    </Directory>
  )
}
