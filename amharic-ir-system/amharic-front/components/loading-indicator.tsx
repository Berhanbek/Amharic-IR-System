"use client"

import { motion } from "framer-motion"

export function LoadingIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-16 w-16">
        <div className="absolute h-16 w-16 rounded-full border-4 border-solid border-gray-200 dark:border-gray-700"></div>
        <motion.div
          className="absolute h-16 w-16 rounded-full border-4 border-solid border-gray-800 dark:border-gray-300 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.div>
      </div>
      <motion.p
        className="mt-4 text-gray-700 dark:text-gray-300 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        በመፈለግ ላይ...
      </motion.p>
      <motion.div
        className="mt-4 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
