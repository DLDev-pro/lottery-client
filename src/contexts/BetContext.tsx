import {
  IBet,
  IBetResultDetail,
  IBetResultDetailInner,
} from '@/utils/interface'
import { BetContextType } from '@/utils/types'
import React, { ReactNode, useState } from 'react'

interface BetProviderProps {
  children: ReactNode
}

export const BetContext = React.createContext<BetContextType | undefined>(
  undefined
)

const BetProvider: React.FC<BetProviderProps> = ({ children }) => {
  const [bet, setBet] = useState<IBetResultDetailInner | null>(null)

  const updateBet = (bet: IBetResultDetailInner) => {
    setBet(bet)
  }

  return (
    <BetContext.Provider value={{ bet, updateBet }}>
      {children}
    </BetContext.Provider>
  )
}

export default BetProvider
