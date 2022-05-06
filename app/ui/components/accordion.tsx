import { Disclosure } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import clsx from 'clsx'

interface AccordionProps {
  title: string
  defaultOpen?: boolean
  className?: string
  buttonClassName?: string
  removeBorder?: boolean
}

export const Accordion: React.FC<React.PropsWithChildren<AccordionProps>> = ({
  title,
  defaultOpen = false,
  children,
  className,
  buttonClassName,
  removeBorder = false,
}) => {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div
          className={clsx('flex flex-col', {
            'border border-purple-850': !removeBorder,
          })}
        >
          <Disclosure.Button
            className={clsx(
              'text-left flex items-center justify-between bg-purple-850',
              buttonClassName,
            )}
          >
            <span>{title}</span>
            <FaChevronDown
              className={`${
                open ? 'transform rotate-180' : ''
              } transition-all noscript-hidden`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className={clsx('text-neutral-400', className)}>
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
