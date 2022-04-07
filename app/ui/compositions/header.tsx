import clsx from 'clsx'
import { Anchor } from '../components/anchor'

const NavButton: React.FC<{ href: string }> = ({ children, href }) => (
  <Anchor
    href={href}
    isNav
    className={({ isActive }) =>
      clsx(
        'font-semibold text-lg h-full flex items-center',
        'hover:text-primary',
        {
          'after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-primary after:h-[2px] text-primary':
            isActive,
        },
      )
    }
  >
    {children}
  </Anchor>
)

export const Header = () => {
  return (
    <nav className="bg-[#0b061c] h-14 shadow-sm shadow-[#05030d] relative">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center gap-x-8">
        <img
          src="/images/rbr.png"
          alt="Randomizer Brasil"
          height={30}
          width={28}
        />
        <ul className="flex gap-x-8 h-full">
          <li className="h-full relative">
            <NavButton href="/">Assistir</NavButton>
          </li>
          <li className="h-full relative">
            <NavButton href="/about">Sobre</NavButton>
          </li>
        </ul>
      </div>
    </nav>
  )
}
