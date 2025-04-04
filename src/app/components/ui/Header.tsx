import { getCurrentAuthUser, logout } from '@/app/service/auth'
import Link from 'next/link'
import { BasePageLayout } from '../layouts/BasePageLayout'

export const Header = async () => {
  const currentUser = await getCurrentAuthUser()

  return (
    <header className="h-12 w-full border-b border-dotted">
      <BasePageLayout>
        <div className="flex items-center justify-between h-full">
          <Link href={'/'}>
            <h1 className="text-3xl">Fighters Review</h1>
          </Link>
          <ul>
            {currentUser ? (
              <li className="font-rubikOne text-lg">
                <button className="cursor-pointer" onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="font-rubikOne text-lg">
                <Link href={'/pages/login'}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </BasePageLayout>
    </header>
  )
}
