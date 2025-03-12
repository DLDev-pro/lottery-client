import { BetContext } from '@/contexts/BetContext'
import { DateContext } from '@/contexts/DateContext'
import { BetContextType, DateContextType } from '@/utils/types'
import React, { useContext, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { SlCalender } from 'react-icons/sl'
import { useLocation } from 'react-router-dom'

const Calender: React.FC = () => {
  const { date, updateDate } = useContext(DateContext) as DateContextType
  const { bet } = useContext(BetContext) as BetContextType
  const [isDetail, setIsDetail] = React.useState(false)

  const { pathname, search } = useLocation()

  const handleNext = () => {
    updateDate(new Date(date.setDate(date.getDate() + 1)))
  }
  const handlePrev = () => {
    updateDate(new Date(date.setDate(date.getDate() - 1)))
  }
  useEffect(() => {
    if (pathname.includes('dat-cuoc')) {
      setIsDetail(true)
    } else if (search.includes('agency_id')) {
      setIsDetail(true)
    } else {
      setIsDetail(false)
    }
  }, [pathname, search])

  return (
    <div className='bg-main w-full py-1 pr-4 flex fixed z-50'>
      {isDetail && bet && (
        <div className='flex justify-between items-center'>
          <h1 className='text-white font-bold'>{bet.agency_id}</h1>
        </div>
      )}
      <div className='flex items-center text-white gap-2 flex-1'>
        <IoIosArrowBack
          className='cursor-pointer'
          onClick={handlePrev}
        />
        <SlCalender />
        <span style={{ userSelect: 'none' }}>{date.toLocaleDateString()}</span>
        <IoIosArrowForward
          className='cursor-pointer'
          onClick={handleNext}
        />
      </div>
    </div>
  )
}

export default Calender
