import { useEffect } from 'react'
import { Portal } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

interface DrawerProps {
  isOpen?: boolean
  className?: string
}

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  isOpen = false,
  className,
  children,
}) => {
  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpen) {
      body?.classList.add('fixed', 'overflow-hidden', 'right-0', 'left-0')
      window.scrollTo(0, 0)
    } else {
      body?.classList.remove('fixed', 'overflow-hidden', 'right-0', 'left-0')
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            bounce: false,
            duration: 0.15,
          }}
          className={clsx(
            'overflow-x-hidden fixed top-0 pt-[87px] pb-20 h-screen w-screen visible lg:invisible bg-purple-900 z-20 overflow-auto',
            className,
          )}
        >
          {children}
        </Portal>
      )}
    </AnimatePresence>
  )
}
