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
import { useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const ResultCustomer = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [type, setType] = useState(selectSearch[0])
  const [datas, setDatas] = useState<IAnalysis[]>([])
  const [tab, setTab] = useState(1)

  const totalNorth = useMemo(() => {
    return datas.reduce((acc, val) => {
      return acc + val.totalNorth
    }, 0)
  }, [datas])

  const totalCentral = useMemo(() => {
    return datas.reduce((acc, val) => {
      return acc + val.totalCentral
    }, 0)
  }, [datas])

  const totalSouth = useMemo(() => {
    return datas.reduce((acc, val) => {
      return acc + val.totalSouth
    }, 0)
  }, [datas])

  const total = totalNorth + totalCentral + totalSouth

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

    setTab(tab)
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

  console.log(
    startDate.toISOString().split('T')[0],
    endDate.toISOString().split('T')[0]
  )
  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    try {
      const response = await globalApi.GetCustomerResult(
        startDate.toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      )
      console.log(response.data)
      // setDatas(response.data)
    } catch (error) {
      console.log(error)
    }
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
          {datas.map((customer, index) => {
            const total =
              customer.totalNorth + customer.totalCentral + customer.totalSouth
            const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
            return (
              <TableRow
                key={index}
                className={`${color} hover:bg-gray-200 cursor-default`}
              >
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="text-left">
                  {customer.customer.name}
                </TableCell>
                <TableCell className="text-right border-r">
                  {customer.totalNorth}
                </TableCell>
                <TableCell className="text-right border-r">
                  {customer.totalCentral}
                </TableCell>
                <TableCell className="text-right border-r">
                  {customer.totalSouth}
                </TableCell>
                <TableCell className="text-right">{total}</TableCell>
              </TableRow>
            )
          })}
          <TableRow className={` hover:bg-gray-200 cursor-default`}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right border-r">{totalNorth}</TableCell>
            <TableCell className="text-right border-r">
              {totalCentral}
            </TableCell>
            <TableCell className="text-right border-r">{totalSouth}</TableCell>
            <TableCell className="text-right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default ResultCustomer
