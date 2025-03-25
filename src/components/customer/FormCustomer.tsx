import { agencyApi, globalApi } from '@/apis'

import { GlobalContext } from '@/contexts/GlobalContext'
import {
  IAgency,
  ICoefficient,
  ICoefficientAgency,
  IRule,
} from '@/utils/interface'
import { FormSubmit, GlobalContextType, InputChange } from '@/utils/types'
import { useContext, useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Loading from '../common/Loading'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useToast } from '../ui/use-toast'
import FormInput from './FormInput'

const FormAgency = () => {
  const { central, north, south } = useContext(
    GlobalContext
  ) as GlobalContextType
  const initState: IAgency = {
    key: '',
    name: '',
    password: '',
    phone: '',
    created_at: new Date().toISOString().split('T')[0],
    agency_name: '',
    agency_pay: [],
    agency_revenue: [],
  }

  const [paySouth, setPaySouth] = useState<ICoefficient>({})
  const [payMiddle, setPayMiddle] = useState<ICoefficient>({})
  const [payNorth, setPayNorth] = useState<ICoefficient>({})

  const [revenueSouth, setRevenueSouth] = useState<ICoefficient>({})
  const [revenueMiddle, setRevenueMiddle] = useState<ICoefficient>({})
  const [revenueNorth, setRevenueNorth] = useState<ICoefficient>({})
  const [rule, setRule] = useState<IRule[]>([])

  const getRule = async () => {
    try {
      const response = await globalApi.GetAllRule()
      const { data } = response
      if (data) {
        setRule(data.data)
        const obj: ICoefficient = {}
        data.data.map((item: IRule) => {
          obj[item.rule_unique_key] = '0'
        })
        setPaySouth(obj)
        setPayMiddle(obj)
        setPayNorth(obj)
        setRevenueSouth(obj)
        setRevenueMiddle(obj)
        setRevenueNorth(obj)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRule()
  }, [])

  const { search } = useLocation()
  const { toast } = useToast()

  // const { agency } = useContext(AgencyContext) as AgencyContextType
  const [agencyCreate, setAgencyCreate] = useState<IAgency>(initState)
  const [loading, setLoading] = useState(false)

  const getDetail = async (id: string) => {
    const response = await agencyApi.GetAgency(id)
    const { data } = response
    if (data && data.data) {
      setAgencyCreate(data.data)

      //set coefficient
      const objSouth: ICoefficient = {}
      const objMiddle: ICoefficient = {}
      const objNorth: ICoefficient = {}

      data.data.agency_pays.map((item: any) => {
        if (item.region_id === 3) {
          objSouth[item.Rule.rule_unique_key] = item.coefficient
        }
        if (item.region_id === 2) {
          objMiddle[item.Rule.rule_unique_key] = item.coefficient
        }
        if (item.region_id === 1) {
          objNorth[item.Rule.rule_unique_key] = item.coefficient
        }
      })

      const objRevenueSouth: ICoefficient = {}
      const objRevenueMiddle: ICoefficient = {}
      const objRevenueNorth: ICoefficient = {}

      data.data.agency_revenues.map((item: any) => {
        if (item.region_id === 3) {
          objRevenueSouth[item.Rule.rule_unique_key] = item.coefficient
        }
        if (item.region_id === 2) {
          objRevenueMiddle[item.Rule.rule_unique_key] = item.coefficient
        }
        if (item.region_id === 1) {
          objRevenueNorth[item.Rule.rule_unique_key] = item.coefficient
        }
      })

      setPaySouth(objSouth)
      setPayMiddle(objMiddle)
      setPayNorth(objNorth)
      setRevenueSouth(objRevenueSouth)
      setRevenueMiddle(objRevenueMiddle)
      setRevenueNorth(objRevenueNorth)
    }
  }

  useEffect(() => {
    if (search.includes('agency_id')) {
      const agencyId = search.split('=')[1]
      if (agencyId) {
        // setAgencyCreate(agency)
        getDetail(agencyId)
      }
    }
  }, [search])

  const handleChange = (e: InputChange) => {
    setAgencyCreate({
      ...agencyCreate,
      [e.target.name]: e.target.value,
    })
  }

  const changeData = (
    coefficient: ICoefficient,
    region: string
  ): ICoefficientAgency[] => {
    const data: ICoefficientAgency[] = []
    for (const key in coefficient) {
      data.push({
        coefficient: parseFloat(coefficient[key as keyof ICoefficient]),
        region_unique_key: region,
        rule_unique_key: key,
      })
    }
    return data
  } // [{ coefficient: number, region_unique_key:string, rule_unique_key:string }]

  const handleSave = async (e: FormSubmit) => {
    e.preventDefault()

    const agency_pay = [
      ...changeData(paySouth, south?.region_unique_key as string),
      ...changeData(payMiddle, central?.region_unique_key as string),
      ...changeData(payNorth, north?.region_unique_key as string),
    ]

    const agency_revenue = [
      ...changeData(revenueSouth, south?.region_unique_key as string),
      ...changeData(revenueMiddle, central?.region_unique_key as string),
      ...changeData(revenueNorth, north?.region_unique_key as string),
    ]

    setLoading(true)
    try {
      const finalData = {
        name: agencyCreate.agency_name,
        password: agencyCreate.password,
        phone: agencyCreate.phone,
        agency_name: agencyCreate.agency_name,
        agency_pay,
        agency_revenue,
      }
      console.log(finalData)
      //Nội dung Tên, Số Phone không có chứa ký tự như: &apos;, &quot;, *, /,
      // &, #, [, ], &lt;, &gt;, =, @, !, -
      //regex name
      const regexName = /^[a-zA-Z0-9 ]+$/
      if (!regexName.test(agencyCreate.agency_name)) {
        toast({
          variant: 'destructive',
          title: 'Chứa các ký tự không cho phép',
        })
        setLoading(false)
        return
      }

      // //regex phone
      // const regexPhone = /^[0-9]+$/
      // if (!regexPhone.test(agencyCreate.phone)) {
      //   toast({
      //     variant: 'destructive',
      //     title: 'Số phone chứa các ký tự không cho phép',
      //   })
      //   setLoading(false)
      //   return
      // }

      let response
      if (search.includes('agency_id')) {
        response = await agencyApi.UpdateAgency(search.split('=')[1], finalData)
      } else {
        response = await agencyApi.CreateAgency(finalData)
      }
      // Call API to save agency
      const { data, status } = response
      if (status === 200) {
        toast({
          variant: 'success',
          title: 'Thành công',
        })
        if (!search.includes('agency_id')) {
          setAgencyCreate(initState)
          const obj: ICoefficient = {}
          rule.map((item: IRule) => {
            obj[item.rule_unique_key] = '0'
          })
          setPaySouth(obj)
          setPayMiddle(obj)
          setPayNorth(obj)
          setRevenueSouth(obj)
          setRevenueMiddle(obj)
          setRevenueNorth(obj)
        }
      }

      if (status === 400) {
        toast({
          variant: 'destructive',
          title: 'Lỗi',
          description: data.message,
        })
      }
      setLoading(false)
      return
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Thất bại',
      })
      setLoading(false)
      return
    }
  }

  if (loading) <Loading />
  return (
    <form className="w-full min-h-screen bg-gray-100" onSubmit={handleSave}>
      {/* Header */}
      <div className="bg-pink-600 text-white p-3 flex justify-between items-center">
        <span className="text-lg font-semibold">THÔNG TIN KHÁCH HÀNG</span>
      </div>

      <div className="bg-white shadow-md rounded-lg m-4 p-4 border border-gray-200">
        <p className="text-red-500 font-medium text-sm">
          Nội dung Tên, Số Phone không có chứa ký tự như: &apos;, &quot;, *, /,
          &, #, [, ], &lt;, &gt;, =, @, !, -
        </p>
        <div className="mt-2">
          {/* <p className="text-gray-600">
            Họ & Tên:{' '}
            <Input
              placeholder="Họ & Tên"
              name="name"
              type="text"
              value={agencyCreate.name}
              onChange={handleChange}
            />
          </p>
          <p className="text-gray-600">
            Phone:{' '}
            <Input
              placeholder="Phone"
              name="phone"
              type="text"
              value={agencyCreate.phone}
              onChange={handleChange}
            />
          </p> */}
          <p className="text-gray-600">
            Tên đại lý:
            <Input
              placeholder="Tên đại lý"
              name="agency_name"
              type="text"
              value={agencyCreate.agency_name}
              onChange={handleChange}
            />
          </p>
          <p className="text-gray-600">
            Pass:
            <Input
              placeholder="Pass"
              name="password"
              type="text"
              className="text-yellow-500"
              value={agencyCreate.password}
              onChange={handleChange}
            />
          </p>
        </div>
      </div>

      <div className="flex gap-2 px-4">
        <Button type="button" className="bg-blue-500 text-white">
          KHÁCH
        </Button>
        <Button type="button" className="bg-gray-400 text-white">
          CHỦ
        </Button>
      </div>

      <FormInput
        region="MIỀN BẮC"
        pay={payNorth}
        setPay={setPayNorth}
        revenue={revenueNorth}
        setRevenue={setRevenueNorth}
        rule={rule}
      />
      <FormInput
        region="MIỀN TRUNG"
        pay={payMiddle}
        setPay={setPayMiddle}
        revenue={revenueMiddle}
        setRevenue={setRevenueMiddle}
        rule={rule}
      />
      <FormInput
        region="MIỀN NAM"
        pay={paySouth}
        setPay={setPaySouth}
        revenue={revenueSouth}
        setRevenue={setRevenueSouth}
        rule={rule}
      />
      <div className="mb-12"></div>
      <Button className="bg-blue-500 text-white rounded-2xl h-fit fixed bottom-0 right-0 m-4">
        <FaSave />
        Lưu
      </Button>
    </form>
  )
}

export default FormAgency
