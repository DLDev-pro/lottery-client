import { DateContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface DateProviderProps {
  children: ReactNode
}

export const DateContext = React.createContext<DateContextType | undefined>(
  undefined
)

const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState(new Date())

  const updateDate = (date: Date) => {
    setDate(date)
  }

  return (
    <DateContext.Provider value={{ date, updateDate }}>
      {children}
    </DateContext.Provider>
  )
}

export default DateProvider
