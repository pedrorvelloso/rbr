import { Directory } from '../components/directory'
import { Heading } from '../components/typograph'
import { VideoSkeleton } from '../components/v2/video-skeleton'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const DirectoryTitle = () => (
  <div className="flex items-center gap-x-4">
    <Heading className="font-bold">Ao vivo</Heading>
    <AiOutlineLoading3Quarters className="animate-spin text-primary" />
  </div>
)

export const StreamsSuspendend = () => {
  return (
    <Directory title={<DirectoryTitle />}>
      {[1, 2, 3, 4].map((value) => (
        <VideoSkeleton key={value} />
      ))}
    </Directory>
  )
}
