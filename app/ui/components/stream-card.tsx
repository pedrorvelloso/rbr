import { IoTimeOutline } from 'react-icons/io5'

import type { Stream } from '~/services/twitch/models/Stream'

import { Anchor } from './anchor'
import { Heading } from './typograph'

export const StreamCard = (stream: Stream) => {
  return (
    <article key={stream.id} className="flex flex-col gap-y-3">
      <Anchor
        href={`https://twitch.tv/${stream.login}`}
        target="_blank"
        className="relative group"
      >
        <p className="absolute bottom-0 z-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mx-2 my-2 text-xs bg-black/90 px-1 rounded-sm flex items-center gap-x-1">
          <IoTimeOutline className="text-primary" /> {stream.startedAt}
        </p>
        <p className="absolute bottom-0 right-0 z-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mx-2 my-2 text-xs bg-black/90 px-1 rounded-sm flex items-center gap-x-1">
          {stream.viewerCount} espectador{stream.viewerCount > 1 && 'es'}
        </p>
        <img
          src={stream.thumbnailUrl}
          alt={stream.title}
          width={320}
          height={180}
          className="w-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
        />
        <div className="absolute bottom-0 right-1 top-1 left-0 group-hover:border-l-4 border-l-primary group-hover:border-b-4 border-b-primary -z-10 transition-all" />
      </Anchor>
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
    </article>
  )
}
