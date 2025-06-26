"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"

interface EmptyStateProps {
  query?: string
  isInitial?: boolean
}

export function EmptyState({ query, isInitial = false }: EmptyStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="rounded-full bg-gray-100 dark:bg-gray-800 p-6 mb-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <Search className="h-12 w-12 text-gray-400 dark:text-gray-500" />
      </motion.div>

      {isInitial ? (
        <>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">በአማርኛ ፍለጋዎን ይጀምሩ</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">የሚፈልጉትን ጥያቄ በአማርኛ ይጻፉ እና ፈልግ የሚለውን ይጫኑ</p>
        </>
      ) : (
        <>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">ምንም ውጤቶች አልተገኙም</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            ለ "{query}" ምንም ውጤቶች አልተገኙም። እባክዎ የተለየ ቃል ይሞክሩ ወይም የፍለጋ ቃልዎን ያስተካክሉ።
          </p>
        </>
      )}
    </motion.div>
  )
}
