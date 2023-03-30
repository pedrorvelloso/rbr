import type { RemixNavLinkProps } from '@remix-run/react/dist/components'
import { Link, NavLink } from '@remix-run/react'

export interface AnchorProps {
  href: string
  className?: string | RemixNavLinkProps['className']
  prefetch?: 'intent' | 'none' | 'render'
  target?: React.HTMLAttributeAnchorTarget
  isNav?: boolean
  ariaLabel?: string
}

export const Anchor: React.FC<React.PropsWithChildren<AnchorProps>> = ({
  href,
  className,
  prefetch,
  target,
  children,
  isNav,
  ariaLabel,
}) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal)
    return (
      <a
        href={href}
        rel={target === '_blank' ? 'noreferrer noopener' : undefined}
        target={target}
        className={className?.toString()}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )

  if (isNav)
    return (
      <NavLink
        to={href}
        prefetch={prefetch}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </NavLink>
    )

  return (
    <Link
      to={href}
      prefetch={prefetch}
      className={className?.toString()}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
}
