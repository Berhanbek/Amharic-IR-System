"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch: (query: string) => void
  onClear: () => void
  initialValue?: string
}

export function SearchBar({ onSearch, onClear, initialValue = "" }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(initialValue)

  useEffect(() => {
    setInputValue(initialValue)
  }, [initialValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(inputValue)
  }

  const handleClear = () => {
    setInputValue("")
    onClear()
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full" role="search" aria-label="የአማርኛ መረጃ ፍለጋ">
      <div className="flex items-center w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus-within:ring-2 focus-within:ring-gray-400 dark:focus-within:ring-gray-500 focus-within:border-transparent overflow-hidden transition-colors duration-300">
        <Input
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="በአማርኛ ይፈልጉ..."
          className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-6 bg-transparent dark:text-white transition-colors duration-300"
          aria-label="የፍለጋ ጥያቄ"
        />

        {inputValue && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="h-10 w-10 mr-1"
            aria-label="አጽዳ"
          >
            <X className="h-5 w-5" />
          </Button>
        )}

        <Button
          type="submit"
          className="h-full px-6 rounded-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 transition-colors duration-300"
          aria-label="ፈልግ"
        >
          <Search className="h-5 w-5 mr-2" />
          <span>ፈልግ</span>
        </Button>
      </div>
    </form>
  )
}
