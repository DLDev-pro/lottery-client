import { DateContextType } from '@/utils/types'
import React, { ReactNode, useEffect, useState } from 'react'

interface DateProviderProps {
  children: ReactNode
}

export const DateContext = React.createContext<DateContextType | undefined>(
  undefined
)

const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const updateDate = (date: Date) => {
    setDate(date)
    //set localStorage
    localStorage.setItem('date', date.toISOString().split('T')[0])
  }

  useEffect(() => {
    const date = localStorage.getItem('date')
    if (date) {
      setDate(new Date(date))
    } else {
      setDate(new Date())
    }
  }, [])

  return (
    <DateContext.Provider value={{ date, updateDate }}>
      {children}
    </DateContext.Provider>
  )
}

export default DateProvider
