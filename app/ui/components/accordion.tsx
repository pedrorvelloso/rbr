import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'

interface AccordionProps {
  title: string
}

export const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  title,
  children,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border border-[#0b061c] flex flex-col">
          <Disclosure.Button className="py-2 px-4 text-left flex items-center justify-between bg-[#0b061c]">
            <span>{title}</span>
            <FaChevronDown
              className={`${open ? 'transform rotate-180' : ''} transition-all`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="py-2 px-4 text-neutral-400">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
