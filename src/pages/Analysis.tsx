import { useState } from 'react'

const Analysis = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <div>
      <h1 className='font-bold text-xs'>
        Tổng kết từ ngày {startDate.toLocaleDateString()} đến ngày{' '}
        {endDate.toLocaleDateString()}
      </h1>

      <form action=''>
        <div className='flex gap-2'>
          <label htmlFor='start'>Từ ngày</label>
          <input
            type='date'
            id='start'
            name='start'
            value={startDate.toISOString().split('T')[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor='end'>Đến ngày</label>
          <input
            type='date'
            id='end'
            name='end'
            value={endDate.toISOString().split('T')[0]}
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
        <button type='submit'>Tìm kiếm</button>
      </form>
    </div>
  )
}

export default Analysis
