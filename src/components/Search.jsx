import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/ResultContextProvider'

//Debounce:Only make request after a certain interval rather than making
//a new request for every character or words that the user enters as search Term c 

const Search = () => {
  const { setSearchTerm } = useResultContext()
  const [text, setText] = useState("Tokyo")
  const [debouncedValue] = useDebounce(text, 300)

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue)
    }
  }, [debouncedValue])
  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border-rounded-full shadow-sm outline-none p-6 text-black hover:shadow"
        placeholder='Search Goggle'
        onChange={(e) => setText(e.target.value)}
      />
      {
        text && (
          <button
            type='button'
            className='absolute top-1.5 right-4 text-2xl text-gray-500'
            onClick={() => setText("")}
          >
            X
          </button>
        )
      }

    </div>
  )
}

export default Search