interface DirectoryProps {
  title: React.ReactNode
}

export const Directory: React.FC<DirectoryProps> = ({ children, title }) => {
  return (
    <section className="flex flex-col gap-y-4">
      {title}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  )
}
