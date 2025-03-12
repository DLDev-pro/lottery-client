import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { IProvince } from '@/utils/interface'
import { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { FormSubmit } from '@/utils/types'
import { settingApi } from '@/apis'
import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'

interface RadioDetailProps {
  provinces: IProvince[]
  region: string
}

const RadioDetail = ({ provinces, region }: RadioDetailProps) => {
  const [province, setProvince] = useState<IProvince | null>(null)
  const { toast } = useToast()

  const ModalUpdate = () => {
    const [acronym, setAcronym] = useState<string>(province?.acronym ?? '')
    const handleUpdate = async (e: FormSubmit) => {
      e.preventDefault()
      try {
        const dataUpdate = [
          {
            acronym,
            province_id: province?.province_id,
          },
        ]

        const response = await settingApi.UpdateProvinceAcronym(dataUpdate)

        if (response) {
          const { status } = response
          if (status === 200) {
            toast({
              variant: 'success',
              title: 'Cập nhật thành công',
            })
            setProvince(null)
          } else {
            toast({
              variant: 'destructive',
              title: 'Cập nhật không thành công',
            })
          }
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Cập nhật không thành công',
        })
      }
    }
    return (
      <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 rounded bg-white p-4"
        >
          <h1>Modal Update</h1>
          <Input
            type="text"
            readOnly
            disabled
            value={province?.province_name}
          />

          <Input
            type="text"
            value={acronym}
            onChange={(e) => {
              setAcronym(e.target.value)
            }}
          />
          <div>
            <Button className="mr-2 bg-main text-white px-2 h-fit rounded-lg">
              Cập nhật
            </Button>
            <Button
              type="button"
              className="text-white px-2 h-fit rounded-lg"
              onClick={() => {
                setProvince(null)
              }}
            >
              Đóng
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      {province && <ModalUpdate />}
      <h1 className="bg-orange-400">{region}</h1>
      <Table>
        <TableBody>
          {provinces.map((data, index) => {
            return (
              <TableRow key={data.province_id}>
                <TableCell className="w-10 text-black border text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-10 text-black border text-center">
                  {data.acronym}
                </TableCell>
                <TableCell className="text-black border text-left">
                  {data.province_name}
                </TableCell>

                <TableCell
                  className="w-10 text-black border text-center cursor-pointer"
                  onClick={() => {
                    setProvince(data)
                  }}
                >
                  <FaRegEdit />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default RadioDetail
