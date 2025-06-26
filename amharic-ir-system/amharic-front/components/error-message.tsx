"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <motion.div
      className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 rounded-lg p-4 text-center my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <AlertCircle className="h-7 w-7 text-red-600 dark:text-red-400" />
      </motion.div>
      <p className="text-lg">{message}</p>
      <p className="text-sm mt-2">እባክዎ ዳግም ይሞክሩ ወይም የተለየ ፍለጋ ይጠቀሙ</p>
    </motion.div>
  )
}
