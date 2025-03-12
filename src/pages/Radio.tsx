import { settingApi } from '@/apis'
import RadioDetail from '@/components/radio/RadioDetail'
import { IProvince } from '@/utils/interface'
import { useEffect, useState } from 'react'

const Radio = () => {
  const [northProvince, setNorthProvince] = useState<IProvince[]>([])
  const [centralProvince, setCentralProvince] = useState<IProvince[]>([])
  const [southProvince, setSouthProvince] = useState<IProvince[]>([])
  const getData = async () => {
    const resonse = await settingApi.GetProvinceAcronym()
    if (resonse) {
      const { data } = resonse
      if (data && data.data.length > 0) {
        const provinces = data.data
        const north = provinces.filter(
          (province: IProvince) => province.region_id === 1
        )
        const central = provinces.filter(
          (province: IProvince) => province.region_id === 2
        )
        const south = provinces.filter(
          (province: IProvince) => province.region_id === 3
        )

        setNorthProvince(north)
        setCentralProvince(central)
        setSouthProvince(south)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="flex font-bold">
        <span className="w-20 text-center">Key</span>
        <span className="flex-1 text-center">Tên đài sổ xố</span>
        <span className="w-10"></span>
      </div>
      <RadioDetail provinces={northProvince} region="Bắc" />
      <RadioDetail provinces={centralProvince} region="Trung" />
      <RadioDetail provinces={southProvince} region="Nam" />
    </div>
  )
}

export default Radio
