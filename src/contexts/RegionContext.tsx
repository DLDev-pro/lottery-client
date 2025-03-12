import { PATHS } from '@/utils/constants'
import { RegionContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface RegionProviderProps {
  children: ReactNode
}

export const RegionContext = React.createContext<RegionContextType | undefined>(
  undefined
)

const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [region, setRegion] = useState('south')

  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === PATHS.MIEN_BAC) {
      setRegion('north')
    } else if (pathname === PATHS.MIEN_TRUNG) {
      setRegion('central')
    } else if (pathname === PATHS.MIEN_NAM) {
      setRegion('south')
    }
  }, [pathname])
  return (
    <RegionContext.Provider value={{ region }}>
      {children}
    </RegionContext.Provider>
  )
}

export default RegionProvider
