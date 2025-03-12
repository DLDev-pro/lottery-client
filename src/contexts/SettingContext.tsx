import { settingApi } from '@/apis'
import { IProvince, IRuleAcronym } from '@/utils/interface'
import { SettingContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface SettingProviderProps {
  children: ReactNode
}

export const SettingContext = React.createContext<
  SettingContextType | undefined
>(undefined)

const SettingProvider: React.FC<SettingProviderProps> = ({ children }) => {
  const [provinces, setProvinces] = useState<IProvince[]>([])
  const [rules, setRules] = useState<IRuleAcronym[]>([])

  const getRegion = async () => {
    const [responseProvinces, responseRule] = await Promise.all([
      settingApi.GetProvinceAcronym(),
      settingApi.GetRuleAcronym(),
    ])

    if (responseProvinces && responseRule) {
      const { data: dataProvinces } = responseProvinces
      const { data: dataRule } = responseRule

      if (dataProvinces && dataRule && dataProvinces.data && dataRule.data) {
        setProvinces(dataProvinces.data)
        setRules(dataRule.data)
      }
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    if (!accessToken) {
      return
    }
    getRegion()
  }, [])

  return (
    <SettingContext.Provider value={{ provinces, rules }}>
      {children}
    </SettingContext.Provider>
  )
}

export default SettingProvider
