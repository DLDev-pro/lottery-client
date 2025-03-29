import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AgencyContext } from '@/contexts/AgencyContext'
import { AgencyContextType } from '@/utils/types'
import { useContext } from 'react'
import { FaEdit, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Customer = () => {
  const { updateAgency, agencies } = useContext(
    AgencyContext
  ) as AgencyContextType

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3 text-black border font-bold text-center">
              #
            </TableHead>

            <TableHead className="text-black border font-bold text-center">
              Khách
            </TableHead>

            <TableHead className="border w-3"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agencies
            .sort((a, b) =>
              a.name.localeCompare(b.name, 'en', { numeric: true })
            )
            .map((customer, index) => {
              const color = index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              return (
                <TableRow
                  key={index}
                  className={`${color} hover:bg-gray-200 cursor-pointer`}
                >
                  <TableCell className="text-center border">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-left border">
                    {customer.name}
                  </TableCell>
                  <TableCell
                    onClick={() => updateAgency(customer)}
                    className="text-right border"
                  >
                    <Link to={'form?agency_id=' + customer.id}>
                      <FaEdit />
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </Table>
      <div className="w-full flex justify-end mt-2">
        <Link
          to={'form'}
          className="bg-[#1ABB9C] border border-[#1ABB9C] text-white p-0 h-fit px-2 rounded-md"
        >
          <FaPlus className="inline" />
          Add
        </Link>
      </div>
    </>
  )
}

export default Customer
