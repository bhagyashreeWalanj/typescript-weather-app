import React from 'react'
import { WiHumidity, WiDayWindy } from 'react-icons/wi'
import { MdOutlineNavigation } from 'react-icons/md'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { IWeather } from '../interfaces/IWeather'

interface IHighlight {
  weatherData: IWeather
}

const Highlights = ({ weatherData }: IHighlight) => {
  const highlightArr = [
    {
      id: 1,
      title: 'Wind Status',
      value: weatherData.wind.speed,
      image: <MdOutlineNavigation className="w-1/12 h-1/2" />,
      measure: 'mph',
    },
    {
      id: 2,
      title: 'Humidity',
      value: weatherData.main.humidity,
      image: <WiHumidity className="w-1/12 h-1/2" />,
      measure: '%',
    },
    {
      id: 3,
      title: 'Visibility',
      value: weatherData.visibility,
      image: <TiWeatherWindyCloudy className="w-1/12 h-1/2" />,
      measure: 'mtr',
    },
    {
      id: 4,
      title: 'Air Pressure',
      value: weatherData.main.pressure,
      image: <WiDayWindy className="w-1/12 h-1/2" />,
      measure: 'hPa',
    },
  ]

  return (
    <>
      {highlightArr.map((card) => {
        return (
          <div
            className="bg-blue-lighter rounded-lg px-auto py-8"
            key={card.id}
          >
            <div className="flex-col">
              <p className="text-center text-gray-300">{card.title}</p>
              <div className="flex justify-center items-center mt-5">
                <span className="text-5xl font-bold">
                  {card.value}
                  <sub className="font-lighter ml-1">{card.measure}</sub>
                </span>
              </div>

              {/* progress bar */}
              <div className="flex justify-center items-center mt-10">
                {card.image}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Highlights
