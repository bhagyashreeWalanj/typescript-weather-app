import React from 'react'
import { IWeather } from '../interfaces/IWeather'
import Highlights from './Highlights'
import TopPanel from './TopPanel'
import { BsSunrise, BsSunset, BsFillCloudsFill } from 'react-icons/bs'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'
import { dateConvert } from '../api/authProvider'

interface IRightpanel {
  data: IWeather
}

const RightPanel = ({ data }: IRightpanel) => {
  const topPanel = [
    {
      id: 1,
      title: 'Sunrise',
      data: dateConvert(data.sys.sunrise),
      image: <BsSunrise className="w-16 h-16" />,
      measure: '',
    },
    {
      id: 2,
      title: 'Sunset',
      data: dateConvert(data.sys.sunset),
      image: <BsSunset className="w-16 h-16" />,
      measure: '',
    },
    {
      id: 3,
      title: 'Clouds',
      data: data.clouds.all,
      image: <BsFillCloudsFill className="w-16 h-16" />,
      measure: '%',
    },
    {
      id: 4,
      title: 'Min Temp',
      data: data.main.temp_min,
      image: <FaTemperatureLow className="w-14 h-12 mt-2" />,
      measure: '°C',
    },
    {
      id: 5,
      title: 'Max Temp',
      data: data.main.temp_max,
      image: <FaTemperatureHigh className="w-14 h-12 mt-2" />,
      measure: '°C',
    },
  ]

  return (
    <>
      <div>
        <div className="flex-col justify-center items-center text-white">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 mt-4 gap-2 p-2">
            <TopPanel weather={topPanel} />

            {/* <Card astronomyTime={data.sys.sunrise} title={'Sunrise'} />
                    <Card astronomyTime={data.sys.sunset} title={'Sunset'} />
                    <Card astronomyTime={data.clouds.all} title={'Clouds'} />
                    <Card astronomyTime={data.main.temp_min} title={'Min Temp'} desc='Temp' />
                    <Card astronomyTime={data.main.temp_max} title={'Max Temp'} desc='Temp' /> */}
          </div>

          <div className="flex justify-start items-center mt-6 ml-4 mb-8">
            <p className="text-4xl font-bold ">Today&apos;s Highlights</p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 m-2 p-4">
            <Highlights weatherData={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightPanel
