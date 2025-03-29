import { globalApi } from '@/apis'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { selectSearch } from '@/utils/data'
import { IAnalysis } from '@/utils/interface'
import { FormSubmit } from '@/utils/types'
import { SelectValue } from '@radix-ui/react-select'
import { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const ResultCustomer = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [type, setType] = useState(selectSearch[0])
  const [datas, setDatas] = useState<IAnalysis[]>([])

  const totalNorth = useMemo(() => {
    return datas.reduce((acc, val) => {
      const north = val.analytics_details.find(
        (item) => item.region_unique_key === 'north'
      )
      const result = (north?.actual || 0) - (north?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const totalCentral = useMemo(() => {
    return datas.reduce((acc, val) => {
      const central = val.analytics_details.find(
        (item) => item.region_unique_key === 'central'
      )
      const result = (central?.actual || 0) - (central?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const totalSouth = useMemo(() => {
    return datas.reduce((acc, val) => {
      const south = val.analytics_details.find(
        (item) => item.region_unique_key === 'south'
      )
      const result = (south?.actual || 0) - (south?.win || 0)
      return acc + result
    }, 0)
  }, [datas])

  const total = useMemo(() => {
    return totalNorth + totalCentral + totalSouth
  }, [totalNorth, totalCentral, totalSouth])

  const changeDate = (tab: number) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay() + 1) // Monday of the current week

    const endOfWeek = new Date(today)

    const startOfLastWeek = new Date(startOfWeek)
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7) // Monday of the last week

    const endOfLastWeek = new Date(startOfLastWeek)
    endOfLastWeek.setDate(endOfLastWeek.getDate() + 6) // Sunday of the last week

    switch (tab) {
      case 1:
        setStartDate(today)
        setEndDate(today)
        break
      case 2:
        setStartDate(yesterday)
        setEndDate(yesterday)
        break
      case 3:
        setStartDate(startOfWeek)
        setEndDate(endOfWeek)
        break
      case 4:
        setStartDate(startOfLastWeek)
        setEndDate(endOfLastWeek)
        break
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await globalApi.GetCustomerResult(
        // startDate.toISOString().split('T')[0],
        // endDate.toISOString().split('T')[0]
        '2023-03-27',
        '2025-03-28'
      )
      const { data } = response

      if (data && data.data.length > 0) {
        setDatas(data.data)
      } else {
        setDatas([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    await getData()
  }

  return (
    <div>
      <h1 className="font-bold text-xs mb-2">
        Tổng kết từ ngày {startDate.toLocaleDateString()} đến ngày{' '}
        {endDate.toLocaleDateString()}
      </h1>

      <form className="flex text-xs" onSubmit={handleSubmit}>
        <input
          type="date"
          id="start"
          name="start"
          className="mr-2 border rounded-2xl px-3 py-0"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
        <input
          type="date"
          id="end"
          name="end"
          className="mr-2 border rounded-2xl px-3 py-0"
          value={endDate.toISOString().split('T')[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
        />
        <Select
          value={type.value}
          onValueChange={(value) => {
            setType(
              selectSearch.find((item) => item.value === value) ||
                selectSearch[0]
            )
          }}
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select Notification Type" />
          </SelectTrigger>
          <SelectContent>
            {selectSearch.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button
          type="submit"
          className="bg-yellow-600 text-white rounded-2xl px-3 py-1 ml-2 flex items-center gap-1"
        >
          <FaSearch /> Tìm kiếm
        </button>
      </form>
      <div className="mt-2 mb-2">
        <button
          className="rounded-l-2xl text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(1)}
        >
          Hôm nay
        </button>
        <button
          className="text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(2)}
        >
          Hôm qua
        </button>
        <button
          className="text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(3)}
        >
          Tuần này
        </button>
        <button
          className="rounded-r-2xl text-xs bg-main px-2 py-1 text-white h-fit"
          onClick={() => changeDate(4)}
        >
          Tuần trước
        </button>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-xs bg-blue-500 px-2 py-1 text-white h-fit">Tổng</p>
          <p className="text-xs bg-green-500 px-2 py-1 text-white h-fit">
            Thực tế
          </p>
          <p className="text-xs bg-main px-2 py-1 text-white h-fit">Thắng</p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-black font-bold text-center">
              #
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Tên khách
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền nam
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền trung
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Miền băc
            </TableHead>
            <TableHead className="text-black font-bold text-center">
              Tổng
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas
            .sort((a, b) =>
              a.agency_name.localeCompare(b.agency_name, 'en', {
                numeric: true,
              })
            )
            .map((customer, index) => {
              const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              const north = customer.analytics_details.find(
                (item) => item.region_unique_key === 'north'
              )
              const central = customer.analytics_details.find(
                (item) => item.region_unique_key === 'central'
              )
              const south = customer.analytics_details.find(
                (item) => item.region_unique_key === 'south'
              )

              const totalRaw =
                (north?.total || 0) +
                (central?.total || 0) +
                (south?.total || 0)
              const totalActual =
                (north?.actual || 0) +
                (central?.actual || 0) +
                (south?.actual || 0)
              const totalWin =
                (north?.win || 0) + (central?.win || 0) + (south?.win || 0)

              return (
                <TableRow
                  key={index}
                  className={`${color} hover:bg-gray-200 cursor-default`}
                >
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-left">
                    {customer.agency_name}
                  </TableCell>
                  <TableCell className="text-right border-r font-bold">
                    {/* {customer.totalNorth} */}
                    <p className="text-blue-500">{north?.total.toFixed(1)}</p>
                    <p className="text-green-500">{north?.actual.toFixed(1)}</p>
                    <p className="text-main">{north?.win.toFixed(1)}</p>
                  </TableCell>
                  <TableCell className="text-right border-r font-bold">
                    <p className="text-blue-500">{central?.total.toFixed(1)}</p>
                    <p className="text-green-500">
                      {central?.actual.toFixed(1)}
                    </p>
                    <p className="text-main">{central?.win.toFixed(1)}</p>
                  </TableCell>

                  <TableCell className="text-right border-r font-bold">
                    {/* {customer.totalSouth} */}
                    <p className="text-blue-500">{south?.total.toFixed(1)}</p>
                    <p className="text-green-500">{south?.actual.toFixed(1)}</p>
                    <p className="text-main">{south?.win.toFixed(1)}</p>
                  </TableCell>

                  <TableCell className="text-right font-bold">
                    <p className="text-blue-500">{totalRaw.toFixed(1)}</p>
                    <p className="text-green-500">{totalActual.toFixed(1)}</p>
                    <p className="text-main">{totalWin.toFixed(1)}</p>
                  </TableCell>
                </TableRow>
              )
            })}
          <TableRow
            className={` hover:bg-gray-200 cursor-default text-main font-bold`}
          >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right border-r">
              {totalNorth.toFixed(1)} ({totalNorth >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right border-r">
              {totalCentral.toFixed(1)} ({totalCentral >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right border-r">
              {totalSouth.toFixed(1)} ({totalSouth >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
            <TableCell className="text-right">
              {total.toFixed(1)} ({total >= 0 ? 'Lãi' : 'Lỗ'})
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default ResultCustomer
