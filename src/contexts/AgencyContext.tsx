import { agencyApi } from '@/apis'
import { IAgency } from '@/utils/interface'
import { AgencyContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface AgencyProviderProps {
  children: ReactNode
}

export const AgencyContext = React.createContext<AgencyContextType | undefined>(
  undefined
)

const AgencyProvider: React.FC<AgencyProviderProps> = ({ children }) => {
  const [agency, setaAgency] = useState<IAgency | null>(null)
  const [agencies, setAgencies] = useState<IAgency[]>([])

  useEffect(() => {
    const getAgency = async () => {
      const response = await agencyApi.GetAgencies()
      if (response) {
        const { data } = response
        if (data && data.data) {
          setAgencies(data.data)
        }
      }
    }

    const accessToken = localStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getAgency()
  }, [])

  const updateAgency = (agency: IAgency) => {
    setaAgency(agency)
  }

  return (
    <AgencyContext.Provider value={{ agency, updateAgency, agencies }}>
      {children}
    </AgencyContext.Provider>
  )
}

export default AgencyProvider
