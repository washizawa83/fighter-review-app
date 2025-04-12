'use client'

import React from 'react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { ReviewForm } from '../features/review/ReviewForm'
import { BasePageLayout } from '../layouts/BasePageLayout'

export const FooterMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {isOpen ? (
        <div className="fixed bottom-0 w-full min-h-63 pt-8 p-2 bg-zinc-700/[80%]">
          <div className="absolute -top-0 left-0 w-full">
            <button
              className="flex flex-col items-center w-full pt-1 h-6 bg-zinc-500 rounded-t-lg cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IconContext.Provider value={{ color: '#fff', size: '20' }}>
                <IoIosArrowDown />
              </IconContext.Provider>
            </button>
          </div>
          <BasePageLayout>
            <ReviewForm onClose={() => setIsOpen(false)} />
          </BasePageLayout>
        </div>
      ) : (
        <div className="fixed bottom-0 w-full h-2 bg-zinc-700 text-slate-100">
          <div className="absolute -top-11 right-5">
            <button
              className="flex flex-col items-center w-32 h-12 bg-zinc-700 rounded-t-lg pt-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IconContext.Provider value={{ color: '#fff', size: '20' }}>
                <IoIosArrowUp />
              </IconContext.Provider>
              <span>+ New Review</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
