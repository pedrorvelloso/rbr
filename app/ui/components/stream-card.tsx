import type { Stream } from '~/services/twitch/models/Stream'

import { Anchor } from './anchor'
import { Heading } from './typograph'

export const StreamCard = (stream: Stream) => {
  return (
    <article key={stream.id} className="flex flex-col gap-y-3">
      <Anchor
        href={`https://twitch.tv/${stream.userName}`}
        target="_blank"
        className="relative group"
      >
        <img
          src={stream.thumbnailUrl}
          alt={stream.title}
          width={320}
          height={180}
          className="w-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
        />
        <div className="absolute bottom-0 right-0 top-0 left-0 bg-primary -z-10" />
      </Anchor>
      <div className="flex gap-x-3">
        <img
          src={stream.profileImageUrl}
          alt={stream.userName}
          className="h-10 rounded-full"
          height={40}
          width={40}
        />
        <span className="min-w-0">
          <Anchor
            href={`https://twitch.tv/${stream.userName}`}
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
            href={`https://twitch.tv/${stream.userName}/videos`}
            target="_blank"
            className="text-[13px] text-neutral-400 hover:text-primary"
          >
            {stream.userName}
          </Anchor>
          <p className="text-[13px] text-neutral-400">{stream.gameName}</p>
        </span>
      </div>
    </article>
  )
}
