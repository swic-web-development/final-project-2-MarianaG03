import React from 'react'

export default function FilmList({ films }) {
  return (
    <div className="gird md: grip-cols-2 grid-cols-1 gap-4 p-4 lg:grid-cols-3">
      {films.map((film) => (
        <div key={film.id} className="rounded-xl bg-pink-100 p-4 text-gray-800 shadow-md">
          <h2 className="text-xl font-bold text-pink-700">{film.title}</h2>
          <p className="text-pink-600 italic">{film.original_title}</p>
          <p className="mt-2 text-sm text-gray-700">{film.description.slice(0, 150)}...</p>
          <p className="mt-2 text-sm font-medium text-pink-500">Released: {film.release_date}</p>
        </div>
      ))}
    </div>
  )
}
