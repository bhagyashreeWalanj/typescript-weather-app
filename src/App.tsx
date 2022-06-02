import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import { baseAuth } from './api/authProvider'
import LeftPanel from './components/LeftPanel'
import Search from './components/Search'
import RightPanel from './components/RightPanel'

export const ContextProvider = createContext({})

const initialData = {
  weather: [
    {
      id: 0,
      main: '',
      description: '',
      icon: '03d',
    },
  ],
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
  sys: {
    country: 'N/A',
    sunrise: 0,
    sunset: 0,
  },

  name: 'N/A',
}

function App() {
  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState(false)
  const [currentWeather, setCurrentWeather] = useState(initialData)

  const fetchData = async (place: string) => {
    try {
      const result = await fetch(
        baseAuth.BASE_URL +
          '/weather?q=' +
          place +
          `&appid=` +
          baseAuth.API_KEY +
          `&units=metric`,
      )
      const response = await result.json()
      console.log('weather : ', response)
      if (response.cod === 200) {
        setCurrentWeather(response)
        createContext(response)
        setError(false)
      } else {
        setCurrentWeather(initialData)
        setError(true)
        return
      }
    } catch (err) {
      setCurrentWeather(initialData)
      setError(true)
      console.error(err)
    }
  }

  useEffect(() => {
    // call the async fetchData function
    fetchData('berlin')
  }, [])

  const handleOnSearch = (place: string) => {
    fetchData(place)
  }

  return (
    <div className="App">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-5">
        {/* left Side Panel */}
        <aside className="col-span-1 lg:col-span-2 bg-blue-lighter h-full">
          <LeftPanel
            data={currentWeather}
            toggle={toggle}
            setToggle={setToggle}
            error={error}
          />
          <Search
            toggle={toggle}
            setToggle={setToggle}
            handleOnSearch={(place) => handleOnSearch(place)}
          />
        </aside>

        {/* right side panel */}
        <ContextProvider.Provider value={currentWeather}>
          <aside className="col-span-1 lg:col-span-4 bg-blue-dark h-full ">
            <RightPanel data={currentWeather} />
          </aside>
        </ContextProvider.Provider>
      </div>
    </div>
  )
}

export default App
