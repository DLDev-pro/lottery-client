/* eslint-disable react-hooks/exhaustive-deps */
import { DateContext } from '@/contexts/DateContext'
import { ID_NEGATIVE } from '@/utils/constants'
import { IAgency, IBetResultDetailInner, IStatistic } from '@/utils/interface'
import { DateContextType } from '@/utils/types'
import React, { useContext, useEffect } from 'react'
import { MdEdit } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
interface BetDetailProps {
  item: IBetResultDetailInner
  agency?: IAgency
  index: number
  pointRaw: IStatistic[]
  pointMiddle: IStatistic[]
  pointMatched: IStatistic[]
}

const BetDetailComp = ({
  item,
  agency,
  index,
  pointMatched,
  pointMiddle,
  pointRaw,
}: BetDetailProps) => {
  const bet_id =
    item !== null ? (item.bets.length > 0 ? item.bets[0].id : null) : null
  const [tab2, setTab2] = React.useState('Điểm')

  const [toggleOwn, setToggleOwn] = React.useState(false) //show money of own or customer

  const [isNew, setIsNew] = React.useState(false)
  const location = useLocation()
  const { date } = useContext(DateContext) as DateContextType

  const [finalResult, setFinalResult] = React.useState<number>(0)
  useEffect(() => {
    const idNegative = location.pathname.split('/').pop()
    if (idNegative && parseInt(idNegative) === ID_NEGATIVE) {
      setIsNew(true)
    }
  }, [])

  useEffect(() => {
    const allPoint2 = pointMatched.reduce((acc, val) => acc + val.money, 0)
    const allPoint3 = pointMiddle.reduce((acc, val) => acc + val.money, 0)

    setFinalResult(allPoint2 - allPoint3)
  }, [pointMiddle, pointMatched])

  if (item === null) {
    return <div>No data</div>
  }

  return (
    <div className={`text-xs pb-2 `}>
      {!isNew && (
        <>
          <div className="font-bold pb-2 pt-1 border-b flex justify-between items-center">
            {!location.pathname.includes('dat-cuoc') && (
              <h1 className="">
                {agency?.name} [
                {date
                  ?.toISOString()
                  .split('T')[0]
                  .split('-')
                  .reverse()
                  .join('-')}
                ]
              </h1>
            )}
            {item.bets &&
              item.bets.length > 0 &&
              !location.pathname.includes('dat-cuoc') && (
                <Link
                  to={`dat-cuoc/${bet_id}?agency_id=${agency?.id}`}
                  className="border border-white shadow-xl shadow-gray-700 rounded-lg p-1 px-2 bg-main text-white"
                >
                  <MdEdit />
                </Link>
              )}
          </div>

          {!location.pathname.includes('dat-cuoc') && (
            <p>
              <span className="text-blue-500 font-bold">{index + 1}) </span>
              {item !== null
                ? item.bets.length > 0
                  ? item.bets[0].bets.join(' ')
                  : ''
                : ''}
            </p>
          )}
        </>
      )}
      <div className="bg-blue-500 pb-3 pt-2 pl-1 grid grid-cols-3 text-white">
        <div>
          <button
            className={`rounded-l-2xl text-xs ${
              tab2 === 'Điểm' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Điểm')}
          >
            Điểm
          </button>
          <button
            className={`rounded-r-2xl text-xs ${
              tab2 === 'Xác' ? 'bg-main' : 'bg-disable'
            } px-2 h-fit`}
            onClick={() => setTab2('Xác')}
          >
            Xác
          </button>
        </div>
        <h3> Qua cò</h3>
        <h3>Trúng</h3>
      </div>

      {pointRaw?.length! > 0 &&
        pointMiddle?.length! > 0 &&
        pointMatched?.length! > 0 && (
          <div className="py-1 pl-1 grid grid-cols-3 text-main">
            <div>
              {pointRaw?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>
                    :{' '}
                    {tab2 === 'Điểm'
                      ? val.score.toFixed(1)
                      : val.money.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
            <div>
              {pointMiddle?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>: {val.money.toFixed(1)}</span>
                </div>
              ))}
            </div>
            <div>
              {pointMatched?.map((val, index) => (
                <div key={index} className="flex font-bold text-xs">
                  <span className="w-12">{val.rule}</span>
                  <span>
                    :{' '}
                    {tab2 === 'Điểm'
                      ? val.score.toFixed(1)
                      : val.money.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      <div className="py-1 pl-1 grid grid-cols-3 bg-blue-600 text-white text-lg">
        <strong className="ml-12">
          : {pointRaw.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
        <strong className="ml-12">
          : {pointMiddle.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
        <strong className="ml-12">
          : {pointMatched.reduce((acc, val) => acc + val.money, 0).toFixed(1)}
        </strong>
      </div>

      {!isNew && (
        <div className="flex justify-between items-center">
          <h1>
            Ngày dò:{' '}
            {date?.toISOString().split('T')[0].split('-').reverse().join('-')}
          </h1>
        </div>
      )}
      {index !== -1 && (
        <div
          className={`py-2 pl-1 text-xs text-black items-center font-bold flex justify-between border-dashed border-t ${
            finalResult >= 0 ? 'border-black' : 'border-main'
          }`}
        >
          <span
            className={`${
              finalResult >= 0 ? 'text-black' : 'text-main'
            } text-lg`}
          >
            {Math.abs(finalResult)} ({finalResult >= 0 ? 'Lỗ' : 'Lời'})
          </span>
          <TbLogout
            className="text-main text-xl cursor-pointer"
            onClick={() => setToggleOwn(!toggleOwn)}
          />
        </div>
      )}
    </div>
  )
}

export default BetDetailComp
