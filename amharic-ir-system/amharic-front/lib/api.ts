import type { SearchResult } from "@/components/search-container"

/**
 * Fetches search results from the API
 *
 * This is a utility function that can be used to fetch search results
 * from the API. It's separated from the components to make it easier
 * to modify the API integration without changing the UI components.
 *
 * @param query The search query in Amharic
 * @returns Promise with search results
 */
export async function fetchSearchResults(query: string): Promise<SearchResult[]> {
  // Replace with your actual API endpoint
  const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.results || []
}

// Example of how to implement your actual API integration:
//
// export async function fetchSearchResults(query: string): Promise<SearchResult[]> {
//   // Replace with your actual backend API endpoint
//   const response = await fetch('https://your-backend-api.com/search', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer YOUR_API_KEY' // If needed
//     },
//     body: JSON.stringify({ query })
//   });
//
//   if (!response.ok) {
//     throw new Error(`API error: ${response.status}`);
//   }
//
//   const data = await response.json();
//   return data.results || [];
// }
