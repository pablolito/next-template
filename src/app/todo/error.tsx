'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="border border-red-500 rounded-sm">
        <h2>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}