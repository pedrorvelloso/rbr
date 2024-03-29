import type { Stream } from '~/services/twitch/models'

import { Live } from '../components/live'
import { StreamCard } from '../components/v2/stream-card'
import { Directory } from '../components/directory'

interface StreamsProps {
  data: Array<Stream>
}

const NoOneOnline = () => (
  <div className="flex justify-center items-center h-72 col-span-full italic text-neutral-400">
    Ninguém on-line no momento
  </div>
)

export const Streams = ({ data }: StreamsProps) => {
  return (
    <Directory title={<Live everyoneOffline={data.length === 0} />}>
      {data.length === 0 ? (
        <NoOneOnline />
      ) : (
        data.map((stream) => <StreamCard key={stream.id} {...stream} />)
      )}
    </Directory>
  )
}
