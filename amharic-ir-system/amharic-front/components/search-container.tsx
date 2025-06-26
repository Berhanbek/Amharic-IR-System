"use client"

import { useState, useRef, useEffect } from "react"
import { SearchBar } from "@/components/search-bar"
import { SearchResults } from "@/components/search-results"
import { LoadingIndicator } from "@/components/loading-indicator"
import { ErrorMessage } from "@/components/error-message"
import { BackToTop } from "@/components/back-to-top"
import { useToast } from "@/hooks/use-toast"
import { EmptyState } from "@/components/empty-state"

// Types for our search results
export interface SearchResult {
  id: string
  title: string
  snippet: string
  link: string // Add this line
}

export function SearchContainer() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const resultsRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Show back to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt+F for focus on search
      if (event.altKey && event.key === "f") {
        event.preventDefault()
        document.querySelector<HTMLInputElement>("input[type='search']")?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Handle the search submission
  const handleSearch = async (searchQuery: string) => {
    // Reset states
    setQuery(searchQuery)
    setError(null)
    setHasSearched(true)

    // Don't search if query is empty
    if (!searchQuery.trim()) {
      setError("እባክዎ የፍለጋ ጥያቄዎን ያስገቡ")
      return
    }

    setIsLoading(true)

    try {
      // API call to backend
      // Update this line:
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";
const response = await fetch(`${backendUrl}/search?query=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) {
        throw new Error(`ፍለጋው አልተሳካም: ${response.status}`)
      }

      const data = await response.json()

      // Adjust this block:
      if (Array.isArray(data) && data.length > 0) {
        setResults(data.map((item, idx) => ({
          id: item.title ?? String(idx),
          title: item.title,
          snippet: item.snippet,
          link: item.link,
        })))
        toast({
          title: "ፍለጋ ተሳክቷል",
          description: `${data.length} ውጤቶች ተገኝተዋል`,
          duration: 3000,
        })
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        setResults([])
        setError("ምንም ውጤቶች አልተገኙም")
      }
    } catch (err) {
      console.error("Search error:", err)
      setError("የአውታረ መረብ ችግር ተፈጥሯል። እባክዎ ዳግም ይሞክሩ።")
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearSearch = () => {
    setQuery("")
    setResults([])
    setError(null)
    setHasSearched(false)
    document.querySelector<HTMLInputElement>("input[type='search']")?.focus()
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full space-y-8">
      <div className="bg-white dark:bg-gray-900 sticky top-0 pt-4 pb-6 z-10 transition-colors duration:300">
        <SearchBar onSearch={handleSearch} onClear={handleClearSearch} initialValue={query} />

        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">ለፍለጋ Alt+F ይጠቀሙ</div>
      </div>

      <div ref={resultsRef}>
        {isLoading && <LoadingIndicator />}

        {error && !isLoading && <ErrorMessage message={error} />}

        {!isLoading && !error && results.length > 0 && <SearchResults results={results} query={query} />}

        {!isLoading && !error && results.length === 0 && hasSearched && <EmptyState query={query} />}

        {!isLoading && !error && !hasSearched && <EmptyState isInitial={true} />}
      </div>

      {showBackToTop && <BackToTop onClick={scrollToTop} />}
    </div>
  )
}
