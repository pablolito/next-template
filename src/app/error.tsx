'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="border border-red-500 rounded-sm">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}