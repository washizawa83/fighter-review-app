'use client'

import { Review } from '@/app/types/review/type'
import { IconContext } from 'react-icons'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

export const ReviewComment = (props: Review) => {
  const isNegativeFlame = (emotionFlame: number) => {
    return 0 > emotionFlame
  }

  return (
    <div className="w-full min-h-22 p-2 border rounded-lg mb-5">
      <div className="flex items-center justify-between w-full h-8 mb-2">
        <div className="flex items-center grow">
          <p>{props.to}</p>
          <span className="mx-4 px-2 bg-gray-200 rounded-md">to</span>
          <p>{props.from}</p>
        </div>
        <div className="flex items-center justify-end w-1/5">
          <div className="flex items-center w-20 px-2">
            <IconContext.Provider value={{ size: '24' }}>
              <AiOutlineLike />
            </IconContext.Provider>
            <span className="ml-2">{props.good}</span>
          </div>
          <div className="flex items-center w-20 px-2">
            <IconContext.Provider value={{ size: '24' }}>
              <AiOutlineDislike />
            </IconContext.Provider>
            <span className="ml-2">{props.bad}</span>
          </div>
          <div>
            <p
              className={`text-green-500 ${isNegativeFlame(props.emotionFlame) && 'text-red-500'}`}
            >
              {props.emotionFlame}F
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
    </div>
  )
}
