import clsx from 'clsx'

export const VideoSkeleton = ({
  showUpperSkeleton = false,
}: {
  showUpperSkeleton?: boolean
}) => {
  return (
    <article className="flex flex-col gap-y-3 bg-purple-850 ">
      <div className="flex gap-x-3 px-4 pt-4 animate-pulse">
        <div className="h-[52px] w-[52px] rounded-full bg-slate-800" />
        <span
          className={clsx('flex flex-col flex-1 h-[52px]', {
            'justify-between': showUpperSkeleton,
            'justify-center gap-y-2': !showUpperSkeleton,
          })}
        >
          {showUpperSkeleton && <div className="h-3 w-full bg-slate-800" />}
          <div className="h-4 w-full bg-slate-800" />
          <div className="h-3 w-full bg-slate-800" />
        </span>
      </div>
      <div className="w-full aspect-video bg-slate-800 animate-pulse" />
    </article>
  )
}
