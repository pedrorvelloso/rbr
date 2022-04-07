import clsx from 'clsx'
import { Heading } from './typograph'

interface LiveProps {
  everyoneOffline: boolean
}

export const Live = ({ everyoneOffline }: LiveProps) => {
  return (
    <Heading className="flex items-center gap-x-4 font-bold">
      Ao vivo{' '}
      <div className="relative flex items-center justify-center w-fit">
        {!everyoneOffline && (
          <div className="h-[14px] w-[14px] bg-red-600/80 animate-ping rounded-full absolute" />
        )}
        <div
          className={clsx('h-3 w-3 rounded-full', {
            'bg-red-600': !everyoneOffline,
            'bg-gray-400': everyoneOffline,
          })}
        />
      </div>
    </Heading>
  )
}
