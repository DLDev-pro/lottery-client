import { settingApi } from '@/apis'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHead,
  Table,
} from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
import { IRuleAcronym } from '@/utils/interface'
import { FormSubmit } from '@/utils/types'
import { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'

const TypeLottery = () => {
  const [data, setData] = useState<IRuleAcronym[]>([])

  const [rule, setRule] = useState<IRuleAcronym | null>(null)

  const { toast } = useToast()

  const getData = async () => {
    const response = await settingApi.GetRuleAcronym()
    if (response) {
      const { data } = response
      if (data && data.data) {
        setData(data.data)
      }
    }
  }

  const ModalUpdate = () => {
    const [acronym, setAcronym] = useState<string>(rule?.acronym ?? '')
    const handleUpdate = async (e: FormSubmit) => {
      e.preventDefault()
      try {
        //arconym not start with number
        if (acronym[0] >= '0' && acronym[0] <= '9') {
          toast({
            variant: 'destructive',
            title: 'Luật không bắt đàu với số',
          })
          return
        }

        const dataUpdate = [
          {
            acronym,
            rule_id: rule?.rule_id,
          },
        ]

        const response = await settingApi.UpdateRuleAcronym(dataUpdate)

        if (response) {
          const { status } = response
          if (status === 200) {
            toast({
              variant: 'success',
              title: 'Cập nhật thành công',
            })
            setRule(null)

            setData(
              data.map((item) => {
                if (item.rule_id === rule?.rule_id) {
                  return {
                    ...item,
                    acronym,
                  }
                }
                return item
              })
            )
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
          <h1>Cập nhật rule</h1>
          <Input type="text" readOnly disabled value={rule?.rule_name} />

          <Input
            type="text"
            value={acronym}
            onChange={(e) => {
              setAcronym(e.target.value)
            }}
          />
          <div>
            <Button className="mr-2 bg-main text-white px-2 h-fit rounded-lg">
              Update
            </Button>
            <Button
              type="button"
              className="text-white px-2 h-fit rounded-lg"
              onClick={() => {
                setRule(null)
              }}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {rule && <ModalUpdate />}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 text-black border text-center">
              Key ID
            </TableHead>
            <TableHead className="w-40 text-black border text-center">
              Rule name
            </TableHead>
            <TableHead className="text-black border text-left">Rule</TableHead>
            <TableHead className="w-10 text-black border text-center">
              Edit
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, index) => {
            return (
              <TableRow key={data.rule_id}>
                <TableCell className="w-10 text-black border text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-40 text-black border text-center">
                  {data.rule_name}
                </TableCell>
                <TableCell className="text-black border text-left">
                  {data.acronym}
                </TableCell>

                <TableCell
                  className="w-10 text-black border text-center cursor-pointer"
                  onClick={() => {
                    setRule(data)
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

export default TypeLottery
