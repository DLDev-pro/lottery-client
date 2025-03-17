/* eslint-disable react-hooks/exhaustive-deps */
import { agencyApi, betApi, globalApi } from '@/apis'
import BetDetailComp from '@/components/bet/BetDetail'
import { Button } from '@/components/ui/button'
import { DateContext } from '@/contexts/DateContext'
import { RegionContext } from '@/contexts/RegionContext'
import { ID_NEGATIVE, PATHS } from '@/utils/constants'
// import { bet } from '@/utils/data'
import {
  IAgency,
  IBetResultDetail,
  IBetResultDetailInner,
  IBetStatistic,
  IRule,
  IStatistic,
} from '@/utils/interface'
import {
  calculateStatistic,
  createEmptyStatistic,
  totalPoints,
} from '@/utils/string'
import { DateContextType, RegionContextType } from '@/utils/types'
import React, { useContext, useEffect, useMemo } from 'react'
import { FaCogs, FaPlus } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const [tab, setTab] = React.useState('KHÁCH')
  const [tab2, setTab2] = React.useState('Điểm')
  const [datas, setDatas] = React.useState<IBetResultDetail[]>([])
  const [data, setData] = React.useState<IBetResultDetailInner | null>(null)
  const navigate = useNavigate()
  const { region } = useContext(RegionContext) as RegionContextType
  const { date } = useContext(DateContext) as DateContextType
  const { search, pathname } = useLocation()
  const [isNew, setIsNew] = React.useState(false)

  const [pointRaw, setPointRaw] = React.useState<IStatistic[]>([])
  const [pointMiddle, setPointMiddle] = React.useState<IStatistic[]>([])
  const [pointMatched, setPointMatched] = React.useState<IStatistic[]>([])
  const [agency, setAgency] = React.useState<IAgency | null>(null)
  const [agency_id, setAgency_id] = React.useState<string>('')
  const [rules, setRules] = React.useState<IRule[]>([])

  const getRules = async () => {
    try {
      const response = await globalApi.GetAllRule()
      if (response) {
        const { data } = response
        if (data.data) {
          setRules(response.data.data)
        } else {
          setRules([])
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getData = async () => {
    try {
      let agency_id
      if (search) {
        agency_id = search.split('=')[1]
        setAgency_id(agency_id)
      }
      let region_unique_key
      if (pathname === PATHS.MIEN_BAC) {
        region_unique_key = 'north'
      } else if (pathname === PATHS.MIEN_TRUNG) {
        region_unique_key = 'central'
      } else if (pathname === PATHS.MIEN_NAM) {
        region_unique_key = 'south'
      }
      if (!date) {
        return
      }
      const response = await betApi.GetBets({
        open_date: date?.toISOString().split('T')[0] || '',
        region_unique_key: region_unique_key,
        agency_id,
      })

      if (response) {
        const data = response.data.data as IBetResultDetail[]
        if (
          response.data === null ||
          data === null ||
          (data !== null &&
            Array.isArray(response.data.data) &&
            data.every((item: IBetResultDetail) => item.bet_detail === null))
        ) {
          setIsNew(true)
          setAgency(null)
          setData(null)
        } else {
          if (search) {
            if (Array.isArray(response.data.data)) {
              setData({
                bets: [],
                province_acronym: response.data.data,
                statistic: [],
                win: [],
              })
              setIsNew(true)
            } else {
              setData(response.data.data)
            }
            const responseAgency = await agencyApi.GetAgency(
              search.split('=')[1]
            )
            if (responseAgency) {
              const { data } = responseAgency
              if (data) {
                setAgency(data.data)
              }
            }
          } else {
            setDatas(data)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRules()
  }, [])

  useEffect(() => {
    getData()
  }, [date])

  useEffect(() => {
    if (datas.length === 0) {
      return
    }
    const statisticRaw = (datas || []).flatMap((item) => {
      if (!item.bet_detail) {
        return []
      }
      return (item.bet_detail || []).flatMap((detail) => {
        return detail.statistic ? detail.statistic : []
      })
    })

    const flattenedRaw = statisticRaw.filter((val) => val !== undefined).flat()

    const statisticFilled = calculateStatistic(
      rules,
      flattenedRaw as unknown as IBetStatistic[]
    )
    setPointRaw(statisticFilled)

    const emptyStatistics = createEmptyStatistic(rules)
    setPointMiddle(emptyStatistics)
    setPointMatched(emptyStatistics)
  }, [datas, rules])

  useEffect(() => {
    const statisticRaw = data?.statistic || []
    const flattenedRaw = statisticRaw.flat()
    const statisticFilled = calculateStatistic(rules, flattenedRaw)
    setPointRaw(statisticFilled)
    const emptyStatistics = createEmptyStatistic(rules)
    setPointMiddle(emptyStatistics)
    setPointMatched(emptyStatistics)
  }, [data, rules])

  const point = totalPoints([])

  const [point1, point2, point3] = point.reduce(
    (acc, val) => {
      if (val.type === 0) {
        acc[0] += val.totalPoints
      } else if (val.type === 1) {
        acc[1] += val.totalPoints
      } else {
        acc[2] += val.totalPoints
      }
      return acc
    },
    [0, 0, 0]
  )

  const finalResult = useMemo(() => {
    return point2 - point3
  }, [point2, point3])

  const reload = () => {
    window.location.reload()
  }

  const getNameRegion = (regin: string) => {
    if (regin === 'north') {
      return 'Miền bắc'
    } else if (regin === 'central') {
      return 'Miền Trung'
    } else if (regin === 'south') {
      return 'Miền Nam'
    }
  }
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-1">
        <div className="space-x-2">
          {['KHÁCH', 'CHỦ'].map((item) => (
            <Button
              key={item}
              className={` text-white px-2 h-fit rounded-lg ${
                tab === item ? 'bg-blue-500' : 'bg-disable'
              }`}
              onClick={() => setTab(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          onClick={reload}
          className="bg-submain text-white px-2 h-fit rounded-lg"
        >
          <FaCogs className="mr-1" />
          Dò lại hết tin
        </Button>
      </div>
      <div className="bg-blue-500 pb-3 pt-1 pl-1 grid grid-cols-3 text-white">
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
      <div className="py-1 pl-1 grid grid-cols-3 text-main">
        <div>
          {pointRaw.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {tab2 === 'Điểm' ? val.score : val.money}</span>
            </div>
          ))}
        </div>
        <div>
          {pointMiddle.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {val.score}</span>
            </div>
          ))}
        </div>
        <div>
          {pointMatched.map((val, index) => (
            <div key={index} className="flex font-bold text-xs">
              <span className="w-12">{val.rule}</span>
              <span>: {val.score}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`bg-blue-500 py-2 pl-1 text-xs text-white font-bold grid grid-cols-3 border-b border-dashed ${
          finalResult >= 0 ? 'border-black' : 'border-main'
        }`}
      >
        <span className="pl-8">
          :{pointRaw.reduce((acc, val) => acc + val.score, 0)}
        </span>
        <span className="pl-8">
          :{pointMiddle.reduce((acc, val) => acc + val.money, 0)}
        </span>
        <span className="pl-8">
          :{pointMatched.reduce((acc, val) => acc + val.score, 0)}
        </span>
      </div>
      <p
        className={`bg-blue-500 py-2 pl-1 text-xs font-bold grid grid-cols-3 ${
          finalResult >= 0 ? 'text-black' : 'text-main'
        }`}
      >
        {getNameRegion(region)}: Cò - Trúng = {Math.abs(finalResult)} (
        {finalResult >= 0 ? 'Lỗ' : 'Lời'})
      </p>
      <div>
        {datas.length > 0 &&
          datas
            .filter((item) => item.bet_detail !== null)
            .map((item, outerIndex) => {
              return (
                <React.Fragment key={outerIndex}>
                  {item.bet_detail.map((item2, innerIndex) => {
                    const statisticRaw = item2?.statistic || []
                    const flattenedRaw = statisticRaw.flat()
                    const statisticFilled = calculateStatistic(
                      rules,
                      flattenedRaw
                    )
                    const emptyStatistics = createEmptyStatistic(rules)
                    return (
                      <div key={`${outerIndex}-${innerIndex}`}>
                        <BetDetailComp
                          agency={item.agency}
                          item={item2}
                          index={innerIndex}
                          pointRaw={statisticFilled}
                          pointMiddle={emptyStatistics}
                          pointMatched={emptyStatistics}
                        />
                      </div>
                    )
                  })}
                </React.Fragment>
              )
            })}
        {data?.bets.length! > 0 && agency && (
          <BetDetailComp
            agency={agency}
            item={data!}
            index={0}
            pointRaw={pointRaw}
            pointMiddle={pointMiddle}
            pointMatched={pointMatched}
          />
        )}
      </div>
      {agency_id && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() =>
              navigate('dat-cuoc/' + ID_NEGATIVE + `?agency_id=${agency_id}`)
            }
            className="bg-submain px-2 h-8 w-8 text-white rounded-full flex justify-center items-center"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Result
