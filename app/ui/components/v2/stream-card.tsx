import { Stream } from '~/services/twitch/models'
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
      <div className="flex gap-x-3 px-4 pt-4">
        <img
          src={stream.profileImageUrl}
          alt={stream.userName}
          className="h-[52px] rounded-full"
          height={52}
          width={52}
        />
        <span className="min-w-0 flex flex-col justify-between">
          <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
            {stream.userName}
          </p>
          <p
            className="text-sm whitespace-nowrap overflow-hidden text-ellipsis font-bold"
            title={stream.title}
          >
            {stream.title}
          </p>
          <p
            className="text-xs whitespace-nowrap overflow-hidden text-ellipsis"
            title={stream.gameName}
          >
            {stream.gameName}
          </p>
        </span>
      </div>
    </VideoCard>
  )
}
