import React, { useState } from 'react'

interface ISearch {
  toggle: boolean
  setToggle(toggle: boolean): void
  handleOnSearch(place: string): void
}

const Search = ({ toggle, setToggle, handleOnSearch }: ISearch) => {
  const [searchPlace, setSearchPlace] = useState('')

  const buttonHandler = () => {
    setToggle(!toggle)
  }

  return (
    <div className={!toggle ? 'hidden' : ''}>
      <div className="flex justify-end m-3">
        <button
          onClick={buttonHandler}
          className="text-white text-xl focus:ouline-none"
        >
          &#10005;
        </button>
      </div>

      <div className="flex items-baseline justify-center">
        <input
          type="text"
          name="place"
          id="place"
          placeholder="Search for "
          className="mt-10 ml-2 p-3 w-auto focus:outline-none focus:ring focus:border-red-100"
          value={searchPlace}
          onChange={(e) => setSearchPlace(e.target.value)}
        />

        <button
          className="bg-blue-200 p-2 mx-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-opacity-50 
                hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out text-black"
          onClick={() => {
            handleOnSearch(searchPlace)
            buttonHandler()
          }}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
