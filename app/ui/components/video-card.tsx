import clsx from 'clsx'
import React from 'react'
import { IoTimeOutline, IoEyeOutline } from 'react-icons/io5'

import { Anchor } from './anchor'

interface VideoCardProps {
  title: string
  href: string
  time: string
  viewCount: number
  showSpectatorsText?: boolean
  thumbnailUrl: string
}

export const VideoCard: React.FC<React.PropsWithChildren<VideoCardProps>> = ({
  title,
  href,
  time,
  viewCount,
  showSpectatorsText = false,
  thumbnailUrl,
  children,
}) => {
  return (
    <article className="flex flex-col gap-y-3">
      <Anchor href={href} target="_blank" className="relative group">
        <p className="absolute bottom-0 z-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mx-2 my-2 text-xs bg-black/90 px-1 rounded-sm flex items-center gap-x-1">
          <IoTimeOutline className="text-primary" /> {time}
        </p>
        <p
          className={clsx(
            'absolute bottom-0 right-0 z-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all mx-2 my-2 text-xs bg-black/90 px-1 rounded-sm flex items-center gap-x-1',
            {
              'flex-row': showSpectatorsText,
              'flex-row-reverse': !showSpectatorsText,
            },
          )}
        >
          {viewCount}{' '}
          {showSpectatorsText ? (
            <>espectador{viewCount > 1 && 'es'}</>
          ) : (
            <IoEyeOutline className="text-primary" />
          )}
        </p>
        <img
          src={thumbnailUrl}
          alt={title}
          width={320}
          height={180}
          className="w-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
        />
        <div className="absolute bottom-0 right-1 top-1 left-0 group-hover:border-l-4 border-l-primary group-hover:border-b-4 border-b-primary -z-10 transition-all" />
      </Anchor>
      {children}
    </article>
  )
}
