import clsx from 'clsx'

const heading: {
  [name: string]: React.ElementType
} = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
  size?: 'heading1' | 'heading2' | 'heading3'
}

export const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  size = 'heading1',
  className,
  children,
  ...headingProps
}) => {
  const Tag = heading[size]

  return (
    <Tag
      {...headingProps}
      className={clsx(className, {
        'text-4xl': size === 'heading1',
        'text-2xl': size === 'heading2',
        'text-sm': size === 'heading3',
      })}
    >
      {children}
    </Tag>
  )
}
