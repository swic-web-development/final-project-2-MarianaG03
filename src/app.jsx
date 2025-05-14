import React, { useEffect, useState } from 'react'
import store from './store'
import { fetchFilms } from './actions'
import FilmList from './components/FilmList'

export default function App() {
  const [state, setState] = useState(store.getState()) // Local state to trigger React re-renders

  useEffect(() => {
    fetchFilms()

    // Subscribe to store changes and update local state to re-render component
    const unsubscribe = store.subscribe((newState) => {
      setState(newState)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])
  if (state.error) {
    return <p className="p-4 text-center text-red-600">{state.error}</p>
  }
  if (state.isLoading) {
    return <p className="text-pink-700) p-4 text-center">Loading...</p>
  }

  return (
    <main className="min-h-screen bg-pink-50 p-4">
      <h1 className="mb-6 text-center text-3xl font-bold text-pink-700">Studio Ghibli Films</h1>
      <FilmList films={state.films} />
    </main>
  )
}
