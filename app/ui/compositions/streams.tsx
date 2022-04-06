import type { Stream } from '~/services/twitch/models/Stream'

import { Live } from '../components/live'
import { StreamCard } from '../components/stream-card'
import { Directory } from '../components/directory'

interface StreamsProps {
  data: Array<Stream>
}

export const Streams = ({ data }: StreamsProps) => {
  return (
    <Directory title={<Live everyoneOffline={data.length === 0} />}>
      {data.map((stream) => (
        <StreamCard {...stream} key={stream.id} />
      ))}
    </Directory>
  )
}
