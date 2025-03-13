import { SettingContext } from '@/contexts/SettingContext'
import { useContext } from 'react'
import {
  IBet,
  IBetStatistic,
  IProvince,
  IRule,
  IRuleAcronym,
  IStatistic,
} from './interface'
import { SettingContextType } from './types'

export const parseDateString = (dateString: string) => {
  if (!dateString) return
  const [year, month, day] = dateString.split('T')[0].split('-')
  return `${month}/${day}/${year}`
}

export const cleanErrorMessage = (error: string) => {
  const matchResult = error.match(/Detail: (.*)$/)
  return matchResult ? matchResult[1] : null
}

export const highlightError = (
  field: string,
  formErrors: Map<string, string>[]
) => {
  return formErrors.some((error) => error.has(field)) ? 'border-red-500' : ''
}

export const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0].split('-').reverse().join('/')
}
// format beautiful name: xxx xxx xx -> Nguyen Van A
export const formatName = (name: string) => {
  return (
    name &&
    name
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

// get full name from first name and last name
export const getFullName = (firstName: string, lastName: string) => {
  return formatName(`${firstName} ${lastName}`)
}

export const totalPoints = (data: IBet[]) => {
  const pointsByTypeAndKey = data.reduce((acc, item) => {
    item.details.forEach((detail) => {
      const key = `${detail.type}-${detail.key}`
      if (!acc[key]) {
        acc[key] = 0
      }
      acc[key] += detail.point
    })
    return acc
  }, {} as Record<string, number>)

  const result = Object.entries(pointsByTypeAndKey).map(
    ([key, totalPoints]) => {
      const [type, keyName] = key.split('-')
      return { type: Number(type), key: keyName, totalPoints }
    }
  )

  return result
}

export const isWin = (point2: number, point3: number): boolean => {
  return point2 - point3 >= 0
}

export const getCity = (city: string): string => {
  const { provinces } = useContext(SettingContext) as SettingContextType
  const province = provinces.find((province) => province.acronym === city)
  return province ? province.province_name : ''
}

export const transferBet = (provinces: IProvince[], bet: string) => {
  const acronyms = provinces.map((p) => p.acronym).concat('2dai', '3dai')
  const result: string[] = []
  let temp = ''

  bet.split(/\s+/).forEach((word) => {
    if (acronyms.includes(word.toLowerCase())) {
      if (temp) result.push(temp.trim())
      temp = word
    } else {
      temp += ' ' + word
    }
  })

  if (temp) result.push(temp.trim())

  return result.filter((item) => acronyms.includes(item.split(' ')[0]))
}

export const checkProvince = (
  provinces: IProvince[],
  bet: string,
  rules: IRuleAcronym[]
) => {
  const acronyms = provinces.map((p) => p.acronym).concat('2dai', '3dai')
  const provincesFromBet = getProvincesFromBet(bet, rules)
  return provincesFromBet.filter((item) => !acronyms.includes(item))
}

export const getProvincesFromBet = (bet: string, rules: IRuleAcronym[]) => {
  const extractedProvinces: string[] = []
  const words = bet.split(/\s+/).map((word) => word.toLowerCase().trim())

  const ruleSet = new Set(rules.map((r) => r.acronym.toLowerCase().trim()))

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i]
    const nextWord = words[i + 1]

    // Nếu từ hiện tại là số+n
    if (/^\d+(\.\d+)?n$/.test(currentWord)) {
      // Nếu từ tiếp theo không phải rule và không phải số thì đó là tỉnh
      if (!ruleSet.has(nextWord) && !/^\d+$/.test(nextWord)) {
        extractedProvinces.push(nextWord)
      }
    }
  }

  return [words[0], ...extractedProvinces]
}

export const extractRulesFromBet = (bet: string) => {
  const extractedRules: string[] = []
  const words = bet.split(/\s+/)

  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i].trim().toLowerCase()
    const nextWord = words[i + 1].trim().toLowerCase()
    if (/^\d+(\.\d+)?n$/.test(nextWord)) {
      extractedRules.push(word)
    }
  }

  return extractedRules
}

export const checkRule = (rule: IRuleAcronym[], bet: string) => {
  const rules = new Set(rule.map((r) => r.acronym.toLowerCase().trim()))
  const extractedRules = extractRulesFromBet(bet)
  return extractedRules.filter((r) => !rules.has(r))
}
export const calculateStatistic = (
  rules: IRule[],
  statisticRaw?: IBetStatistic[]
): IStatistic[] =>
  (rules || []).map((rule) => {
    const matchedItems = statisticRaw?.filter(
      (item) => item.rule_id === rule.rule_unique_key
    )

    const totalScore =
      matchedItems?.reduce((sum, item) => sum + item.score, 0) || 0

    const totalMoney =
      matchedItems?.reduce((sum, item) => sum + item.money_bet, 0) || 0

    return {
      rule: rule.rule_unique_key,
      score: totalScore,
      money: totalMoney,
    }
  })
export const createEmptyStatistic = (rules: IRule[]): IStatistic[] =>
  (rules || []).map((rule) => ({
    rule: rule.rule_unique_key,
    score: 0,
    money: 0,
  }))
