import React from 'react'
import { IWeather } from '../interfaces/IWeather'

interface ICard {
  id: number
  title: string
  data: any
  image: any
  measure: string
}
interface IToppanel {
  weather: ICard[]
}

const TopPanel = ({ weather }: IToppanel) => {
  return (
    <>
      {weather.map((card) => {
        return (
          <div className="bg-blue-lighter p-7 rounded-lg" key={card.id}>
            <div className="flex-col">
              <p className="flex justify-center">{card.title}</p>
              <div className="flex justify-center items-center">
                {card.image}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <span>
                {card.data} {card.measure}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TopPanel
