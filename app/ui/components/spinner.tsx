import { motion } from 'framer-motion'
import { useSpinDelay } from 'spin-delay'

import { GiTriforce } from 'react-icons/gi'

interface SpinnerProps {
  isLoading: boolean
}

export const Spinner = ({ isLoading }: SpinnerProps) => {
  const showLoader = useSpinDelay(Boolean(isLoading), {
    delay: 20,
    minDuration: 1000,
  })

  return (
    <>
      {showLoader && (
        <motion.div
          animate={{ rotateY: [180, -180] }}
          transition={{ duration: 1, repeatType: 'mirror', repeat: Infinity }}
          className="w-fit text-yellow-600 text-4xl fixed bottom-3 right-3 z-50"
        >
          <GiTriforce />
        </motion.div>
      )}
    </>
  )
}
