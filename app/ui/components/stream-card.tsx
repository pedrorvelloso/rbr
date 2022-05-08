import type { Stream } from '~/services/twitch/models'

import { Anchor } from './anchor'
import { Heading } from './typograph'
import { VideoCard } from './video-card'

export const StreamCard = (stream: Stream) => {
  return (
    <VideoCard
      title={stream.title}
      href={`https://twitch.tv/${stream.login}`}
      viewCount={stream.viewerCount}
      showSpectatorsText
      thumbnailUrl={stream.thumbnailUrl}
      time={stream.duration}
    >
      <div className="flex gap-x-3">
        <img
          src={stream.profileImageUrl}
          alt={stream.userName}
          className="h-10 rounded-full"
          height={40}
          width={40}
        />
        <span className="min-w-0 flex flex-col">
          <Anchor
            href={`https://twitch.tv/${stream.login}`}
            target="_blank"
            className="hover:text-primary"
          >
            <Heading
              size="heading3"
              className="whitespace-nowrap overflow-hidden text-ellipsis font-semibold"
              title={stream.title}
            >
              {stream.title}
            </Heading>
          </Anchor>
          <Anchor
            href={`https://twitch.tv/${stream.login}/videos`}
            target="_blank"
            className="text-[13px] text-neutral-400 hover:text-primary"
          >
            {stream.userName}
          </Anchor>
          <p className="text-[13px] text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis">
            {stream.gameName}
          </p>
        </span>
      </div>
    </VideoCard>
  )
}
