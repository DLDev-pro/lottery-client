import { ICoefficient, IRule } from '@/utils/interface'
import { InputChange } from '@/utils/types'
import Loading from '../common/Loading'

interface FormInputProps {
  region: string
  pay: ICoefficient
  setPay: React.Dispatch<React.SetStateAction<ICoefficient>>
  revenue: ICoefficient
  setRevenue: React.Dispatch<React.SetStateAction<ICoefficient>>
  rule: IRule[]
}

const FormInput = ({
  region,
  pay,
  setPay,
  revenue,
  setRevenue,
  rule,
}: FormInputProps) => {
  const handleChange = (e: InputChange) => {
    const { name, value } = e.target
    const key = name.split('-')[0]
    if (name.includes('1')) {
      setPay({
        ...pay,
        [key]: value,
      })
    } else {
      setRevenue({
        ...revenue,
        [key]: value,
      })
    }
  }

  const generatePay = (rule: IRule[]) => {
    return (
      <>
        {rule.map((item) => (
          <div className="flex justify-center" key={item.id}>
            <label className="text-right w-32 mr-3">{item.name}</label>

            <input
              type="text"
              name={`${item.rule_unique_key}-1`}
              value={pay[item.rule_unique_key]}
              onChange={handleChange}
              className="border-b border-dashed focus:outline-none text-black pl-1"
            />
          </div>
        ))}
      </>
    )
  }

  const generateRevenue = (rule: IRule[]) => {
    return (
      <>
        {rule.map((item) => (
          <div className="flex justify-center items-center" key={item.id}>
            <label className="text-right w-32 mr-3">{item.name}</label>
            <input
              type="text"
              name={`${item.rule_unique_key}-2`}
              value={revenue[item.rule_unique_key]}
              onChange={handleChange}
              className="border-b border-dashed focus:outline-none text-black pl-1"
            />
          </div>
        ))}
      </>
    )
  }

  if (rule.length === 0) {
    return <Loading />
  }
  return (
    <div className="bg-white text-orange-500 text-center">
      <p className="shadow shadow-gray-400 w-full py-1">{region}</p>
      <div className="sm:hidden shadow shadow-gray-400 w-full py-1 md:grid grid-cols-2">
        <span>Hệ số thu</span>
        <span>Hệ số trả</span>
      </div>
      <div className="sm:hidden shadow shadow-gray-400 w-full py-1 md:grid grid-cols-2">
        <div>{generatePay(rule)}</div>
        <div>{generateRevenue(rule)}</div>
      </div>
      <div className="md:hidden">
        <span>Hệ số thu</span>
        <div>{generatePay(rule)}</div>
        <span>Hệ số trả</span>
        <div>{generateRevenue(rule)}</div>
      </div>
    </div>
  )
}

export default FormInput
