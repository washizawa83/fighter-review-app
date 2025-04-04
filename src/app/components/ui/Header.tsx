import Link from 'next/link'
import { BasePageLayout } from '../layouts/BasePageLayout'

export const Header = () => {
  return (
    <header className="h-12 w-full border-b border-dotted">
      <BasePageLayout>
        <div className="flex items-center justify-between h-full">
          <Link href={'/'}>
            <h1 className="text-3xl">Fighters Review</h1>
          </Link>
          <ul>
            <Link href={'/pages/login'}>
              <li className="font-rubikOne text-xl">Login</li>
            </Link>
          </ul>
        </div>
      </BasePageLayout>
    </header>
  )
}
