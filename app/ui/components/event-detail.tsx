import { ClientOnly } from 'remix-utils'

import { formatDate } from '~/utils/dates'

interface EventDetailProps {
  serverStartTime: string
  startTime: string
  summary: string
  dateTime: string
}

const Time = ({ time, dateTime }: { time: string; dateTime: string }) => {
  return (
    <time dateTime={dateTime} className="font-bold min-w-fit">
      {time}
    </time>
  )
}

export const EventDetail: React.FC<EventDetailProps> = ({
  serverStartTime,
  startTime,
  summary,
  dateTime,
}) => {
  return (
    <div className="flex gap-3">
      <ClientOnly
        fallback={<Time time={serverStartTime} dateTime={dateTime} />}
      >
        {() => (
          <Time time={formatDate(startTime, 'HH:mm')} dateTime={dateTime} />
        )}
      </ClientOnly>
      <span>{summary}</span>
    </div>
  )
}
