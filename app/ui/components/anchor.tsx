import type { RemixNavLinkProps } from '@remix-run/react/components'
import { Link, NavLink } from '@remix-run/react'

export interface AnchorProps {
  href: string
  className?: string | RemixNavLinkProps['className']
  prefetch?: 'intent' | 'none' | 'render'
  target?: React.HTMLAttributeAnchorTarget
  isNav?: boolean
}

export const Anchor: React.FC<AnchorProps> = ({
  href,
  className,
  prefetch,
  target,
  children,
  isNav,
}) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal)
    return (
      <a
        href={href}
        rel={target === '_blank' ? 'noreferrer noopener' : undefined}
        target={target}
        className={className?.toString()}
      >
        {children}
      </a>
    )

  if (isNav)
    return (
      <NavLink to={href} prefetch={prefetch} className={className}>
        {children}
      </NavLink>
    )

  return (
    <Link to={href} prefetch={prefetch} className={className?.toString()}>
      {children}
    </Link>
  )
}
