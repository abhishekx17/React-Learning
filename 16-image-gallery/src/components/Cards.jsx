import React from 'react'

const Cards = ({elem}) => {
  return (
    <div>
        <a href={elem.url} target="_blank" rel="noopener noreferrer">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-800 hover:shadow-amber-400/40 bg-gray-800/60 backdrop-blur-sm">
              <img
                src={elem.download_url}
                alt={`Photo by ${elem.author}`}
                className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-3 text-center text-gray-300 text-sm bg-gray-900/70">
                <p className="truncate">{elem.author}</p>
              </div>
            </div>
          </a>
    </div>
  )
}

export default Cards
