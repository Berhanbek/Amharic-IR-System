"use client"

import { useState } from "react"
import type { SearchResult } from "@/components/search-container"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface SearchResultsProps {
  results: SearchResult[]
  query: string
}

export function SearchResults({ results, query }: SearchResultsProps) {
  const [expandedResults, setExpandedResults] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedResults)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedResults(newExpanded)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{`"${query}" ለሚለው ${results.length} ውጤቶች ተገኝተዋል`}</h2>

      <motion.ul className="space-y-6" variants={container} initial="hidden" animate="show">
        {results.map((result) => {
          const isExpanded = expandedResults.has(result.id)

          return (
            <motion.li
              key={result.id}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
              onClick={() => toggleExpand(result.id)}
              variants={item}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex justify-between items-center">
                <a href={result.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">
                  {result.title}
                </a>
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isExpanded ? "auto" : "4rem",
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
                className={`text-gray-700 dark:text-gray-300 overflow-hidden ${!isExpanded ? "line-clamp-2" : ""}`}
              >
                {result.snippet}
              </motion.div>

              {!isExpanded && (
                <button
                  className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(result.id)
                  }}
                >
                  ተጨማሪ ያንብቡ...
                </button>
              )}
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}
