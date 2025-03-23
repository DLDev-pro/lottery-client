import { globalApi } from '@/apis'
import { IRegion } from '@/utils/interface'
import { GlobalContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalContext = React.createContext<GlobalContextType | undefined>(
  undefined
)

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [south, setSouth] = useState<IRegion | null>(null)
  const [central, setCentral] = useState<IRegion | null>(null)
  const [north, setNorth] = useState<IRegion | null>(null)

  const getRegion = async () => {
    const response = await globalApi.GetRegion()
    if (response) {
      const { data } = response
      if (data) {
        data.data.map((item: IRegion) => {
          if (item.region_unique_key === 'south') {
            setSouth(item)
          } else if (item.region_unique_key === 'central') {
            setCentral(item)
          } else {
            setNorth(item)
          }
        })
      }
    }
  }

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getRegion()
  }, [])

  return (
    <GlobalContext.Provider value={{ central, north, south }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
