import React from 'react'
import { IoEyeOutline, IoTimeOutline } from 'react-icons/io5'

import { Anchor } from '../anchor'

interface VideoCardProps {
  title: string
  href: string
  time: string
  viewCount: number
  showSpectatorsText?: boolean
  thumbnailUrl: string
}

export const VideoCard: React.FC<React.PropsWithChildren<VideoCardProps>> = ({
  children,
  thumbnailUrl,
  title,
  time,
  viewCount,
  showSpectatorsText,
  href,
}) => {
  return (
    <Anchor
      href={href}
      target="_blank"
      className="hover:scale-105 transition-all"
    >
      <article className="flex flex-col gap-y-3 bg-purple-850">
        {children}
        <span className="relative">
          <p className="absolute m-2 text-xs top-0 left-0 bg-black/90 px-1 flex items-center gap-x-1">
            <IoTimeOutline className="text-primary" />
            {time}
          </p>
          <p className="absolute m-2 text-xs top-0 right-0 bg-black/90 px-1 flex items-center gap-x-1">
            {!showSpectatorsText && <IoEyeOutline className="text-primary" />}
            {viewCount}{' '}
            {showSpectatorsText && <>espectador{viewCount > 1 && 'es'}</>}
          </p>
          <img
            src={thumbnailUrl}
            alt={title}
            width={320}
            height={180}
            className="w-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </span>
      </article>
    </Anchor>
  )
}
