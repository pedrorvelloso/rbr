import { useEffect, useState } from 'react'
import { useTransition } from '@remix-run/react'

import { FaTimes, FaBars } from 'react-icons/fa'
import clsx from 'clsx'

import { socials, nav } from '~/utils/menu'

import { Anchor } from '../components/anchor'
import { Drawer } from '../components/drawer'

const NavButton: React.FC<
  React.PropsWithChildren<{ href: string; isMobile?: boolean }>
> = ({ children, href, isMobile = false }) => (
  <Anchor
    href={href}
    isNav
    className={({ isActive }) =>
      clsx(
        'font-semibold text-lg h-full flex items-center',
        'hover:text-primary',
        {
          'text-primary': isActive,
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-primary after:h-[2px]':
            isActive && !isMobile,
        },
      )
    }
  >
    {children}
  </Anchor>
)

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'loading') setDrawerOpen(false)
  }, [transition.state])

  return (
    <>
      <nav className="bg-purple-850 h-14 shadow-sm shadow-[#05030d] relative z-30">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
          <div className="h-full flex items-center gap-x-8">
            <button
              type="button"
              onClick={() => setDrawerOpen((prevState) => !prevState)}
              className="inline lg:hidden noscript-hidden"
            >
              {drawerOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            <img
              src="/images/rbr.png"
              alt="Randomizer Brasil"
              height={30}
              width={28}
            />
            <ul className="hidden lg:flex gap-x-8 h-full">
              {nav.map((item) => (
                <li className="h-full relative" key={item.label}>
                  <NavButton href={item.href}>{item.label}</NavButton>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex gap-x-4">
            {socials.map(({ icon: Icon, href }) => (
              <Anchor
                target="_blank"
                href={href}
                key={href}
                className="relative before:absolute before:-inset-[6px] hover:before:bg-white/10 before:-z-10 before:rounded z-20 hover:text-white"
              >
                <Icon size={20} />
              </Anchor>
            ))}
          </div>
        </div>
      </nav>
      <Drawer isOpen={drawerOpen} className="px-8">
        <ul className="flex flex-col gap-y-2">
          {nav.map((item) => (
            <li className="h-full relative" key={item.label}>
              <NavButton href={item.href} isMobile>
                {item.label}
              </NavButton>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4 mt-8">
          {socials.map(({ icon: Icon, href }) => (
            <Anchor
              target="_blank"
              href={href}
              key={href}
              className="relative before:absolute before:-inset-[6px] hover:before:bg-white/10 before:-z-10 before:rounded z-20 hover:text-white"
            >
              <Icon size={20} />
            </Anchor>
          ))}
        </div>
      </Drawer>
    </>
  )
}
