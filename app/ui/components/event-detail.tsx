import { ClientOnly } from 'remix-utils'

import { formatDate } from '~/utils/dates'

interface EventDetailProps {
  serverStartTime: string
  startTime: string
  summary: string
  dateTime: string
}

export const EventDetail: React.FC<EventDetailProps> = ({
  serverStartTime,
  startTime,
  summary,
  dateTime,
}) => {
  return (
    <div className="flex gap-3 min-w-0 items-center">
      <time dateTime={dateTime} className="font-bold min-w-fit">
        <ClientOnly fallback={serverStartTime}>
          {() => <>{formatDate(startTime, 'HH:mm')}</>}
        </ClientOnly>
      </time>
      <span className="text-ellipsis overflow-hidden whitespace-nowrap">
        {summary}
      </span>
    </div>
  )
}
