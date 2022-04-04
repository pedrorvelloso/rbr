import { Heading } from '~/ui/components/typograph'

export default function Index() {
  return (
    <div>
      <Heading className="flex items-center gap-x-4 font-bold">
        Ao vivo{' '}
        <div className="relative flex items-center justify-center w-fit">
          <div className="h-[14px] w-[14px] bg-red-600/80 animate-ping rounded-full absolute" />
          <div className="h-3 w-3 bg-red-600 rounded-full" />
        </div>
      </Heading>
    </div>
  )
}
