import { SearchContainer } from "@/components/search-container"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300">
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          የአማርኛ መረጃ ፍለጋ ሥርዓት
        </h1>
        <SearchContainer />
      </div>
    </main>
  )
}
