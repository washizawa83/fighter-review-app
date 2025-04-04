import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const BasePageLayout = ({ children }: Props) => {
  return (
    <div className="w-content lg:w-5/6 xl:px-0 w-full h-full mx-auto px-8">
      {children}
    </div>
  )
}
