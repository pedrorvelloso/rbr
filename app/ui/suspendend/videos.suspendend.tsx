import { Directory } from '../components/directory'
import { Heading } from '../components/typograph'
import { VideoSkeleton } from '../components/v2/video-skeleton'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const DirectoryTitleSuspended = ({
  title,
  showLoader,
}: {
  title: string
  showLoader?: boolean
}) => (
  <div className="flex items-center gap-x-4">
    <Heading className="font-bold">{title}</Heading>
    {showLoader && (
      <AiOutlineLoading3Quarters className="animate-spin text-primary" />
    )}
  </div>
)

interface VideosSuspendedProps {
  title: React.ReactNode
  showUpperSkeleton?: boolean
}

export const VideosSuspended = ({
  title,
  showUpperSkeleton,
}: VideosSuspendedProps) => {
  return (
    <Directory title={title}>
      {[1, 2, 3, 4].map((value) => (
        <VideoSkeleton key={value} showUpperSkeleton={showUpperSkeleton} />
      ))}
    </Directory>
  )
}
