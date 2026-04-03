'use client'

import { FC } from 'react'

import { useInitialization } from '@@/context/FilterProvider'
import { useTimeout } from '@@/lib/hooks'

import { Fading } from '../Fading'
import { Menu } from '../Menu'

interface SidebarProps {
  activeSection?: string
}

export const Sidebar: FC<SidebarProps> = ({ activeSection }) => {
  const [initialized, setInitialized] = useInitialization()
  useTimeout(() => {
    if (!initialized) setInitialized(true)
  }, 3000)

  return (
    <div className="hidden fixed top-0 left-0 z-20 flex-col justify-center h-full md:flex sidebar">
      <div className="grid absolute top-0 left-0 grid-cols-6 mt-12 w-full">
        <div className="col-span-1" />
        <div className="col-span-3">
          {initialized ? (
            <img
              className="w-full"
              src="/img/f-bit_logo_white.svg"
              alt="Logo f-bit software"
            />
          ) : (
            <Fading delay={800}>
              <img
                className="w-full"
                src="/img/f-bit_logo_white.svg"
                alt="Logo f-bit software"
              />
            </Fading>
          )}
        </div>
        <div className="col-span-2" />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          {initialized ? (
            <Menu activeSection={activeSection} />
          ) : (
            <Fading delay={2400}>
              <Menu activeSection={activeSection} />
            </Fading>
          )}
        </div>
      </div>
    </div>
  )
}
