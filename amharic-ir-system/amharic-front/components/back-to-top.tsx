"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface BackToTopProps {
  onClick: () => void
}

export function BackToTop({ onClick }: BackToTopProps) {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={onClick}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-300"
        aria-label="ወደ ላይ ይመለሱ"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  )
}
