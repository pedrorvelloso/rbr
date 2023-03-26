export const VideoSkeleton = () => {
  return (
    <article className="flex flex-col gap-y-3 bg-purple-850 ">
      <div className="flex gap-x-3 px-4 pt-4 animate-pulse">
        <div className="h-[52px] w-[52px] rounded-full bg-slate-800" />
        <span className="flex flex-col justify-between flex-1 h-[52px]">
          <div className="h-3 w-full bg-slate-800" />
          <div className="h-4 w-full bg-slate-800" />
          <div className="h-3 w-full bg-slate-800" />
        </span>
      </div>
      <div className="w-full aspect-video bg-slate-800 animate-pulse" />
    </article>
  )
}
