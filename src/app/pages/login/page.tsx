'use client'

import { BasePageLayout } from '@/app/components/layouts/BasePageLayout'
import { login } from '@/app/service/auth'
import { IconContext } from 'react-icons'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  return (
    <BasePageLayout>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg">
        <h2 className="flex items-center justify-center w-full text-4xl mb-4">
          Login
        </h2>
        <p className="mb-6 bg-gray-300 px-2 rounded-lg">
          A wise choice. The procedure will be over before you even have a
          chance to forget what you intended to write.
        </p>
        <ul className="flex items-start justify-center min-h-56 w-full">
          <li>
            <button
              className="z-10 flex w-60 items-center justify-center rounded bg-white p-2 cursor-pointer"
              onClick={() => login('google')}
            >
              <IconContext.Provider value={{ size: '28px' }}>
                <FcGoogle />
              </IconContext.Provider>
              <span className="ml-3 text-slate-700">Login With Google</span>
            </button>
          </li>
        </ul>
      </div>
    </BasePageLayout>
  )
}
