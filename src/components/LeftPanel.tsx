import React from 'react'
import { IWeather } from '../interfaces/IWeather'
import { TiLocationOutline } from 'react-icons/ti'
import { Alert } from './Alert'

interface ILeftPanel {
  toggle: boolean
  setToggle(toggle: boolean): void
  data: IWeather
  error: boolean
}

const LeftPanel = ({ toggle, setToggle, data, error }: ILeftPanel) => {
  const buttonHandler = () => {
    setToggle(!toggle)
  }
  const icon_src =
    'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png'

  return (
    <>
      <div className={toggle ? 'hidden' : ''}>
        {error ? <Alert /> : ''}
        <div className="flex-col">
          <div className="flex">
            <button
              className="bg-light-gray text-white mt-10 ml-10 rounded-md p-3"
              onClick={buttonHandler}
            >
              Search For Places
            </button>
          </div>
          {/* images */}
          <div className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-center items-center">
              <p className="flex text-gray-400 font-bold text-2xl mt-12 ">
                <TiLocationOutline />
                <label>
                  {data.name}, {data.sys.country}
                </label>
              </p>
            </div>

            <img src={icon_src} alt="" width="350" height="350" />

            <p className=" text-gray-50 font-bold mb-10 text-5xl">Today</p>
            <p>
              <span className="font-extrabold text-white text-7xl">
                {data.main.temp}
              </span>
              <span className="text-gray-400 text-3xl">°C</span>
            </p>

            <p className="mt-10">
              <span className="font-bold text-white text-xl opacity-40">
                Feels Like {data.main.feels_like}°C
              </span>
            </p>
            <p className="text-gray-50 font-bold mt-10 text-3xl mb-10">
              {data.weather[0].main}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftPanel
