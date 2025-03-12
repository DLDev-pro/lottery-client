import { IBetType } from './types'

interface IBase {
  id?: number
  created_at: string
  updated_at?: string
  deleted_at?: string | null
}

export interface IUser extends IBase {
  username: string
  avatar: string
  phone: string
}

export interface ICreateUser {
  password: string
  name: string
}

export interface IUpdateUser extends ICreateUser {}

export interface IUpdateUser {
  username: string
  name: string
  phone: string
}

export interface ILoginUser {
  username: string
  password: string
}

export interface ICustomer extends IBase {
  key: string
  name: string
  pass?: string
  phone: string
  agency_name: string
}
export interface IBet extends IBase {
  cities: string[]
  raw_messages: string[]
  message: string
  name: string
  coefficient: number
  agency_id: number
  bet_correct: string[]
  region: string
  details: IBetDetail[]
}
export interface IBetDetail {
  type: IBetType
  point: number
  key: string
}

export interface IAnalysis extends IBase {
  customer: IAgency
  totalSouth: number
  totalCentral: number
  totalNorth: number
}

export interface IAgency extends IBase {
  agency_name: string
  key?: string
  agency_pay: AgencyElement[]
  agency_revenue: AgencyElement[]
  name: string
  password: string
  phone: string
}

export interface AgencyElement {
  coefficient: number
  region_id: number
  rule_id: number
}
export interface IRegion {
  id: number
  name: string
  region_unique_key: string
}

export interface ICoefficient {
  [key: string]: number
}

export interface ICoefficientAgency {
  coefficient: number
  region_unique_key: string
  rule_unique_key: string
}

export interface ISetting {
  font_size: number
  data_store_day: number
  show_bet_score: number
}

export interface IUpdatePassword {
  old_password: string
  new_password: string
  confirm_password: string
}

export interface IRule {
  id: number
  name: string
  default_acronym: string
  rule_unique_key: string
}

export interface IProvince {
  province_id: number
  acronym: string
  province_name: string
  region_id: number
  region_name: string
}

export interface IRuleAcronym {
  acronym: string
  rule_name: string
  rule_id: number
}

export interface IBetResult {
  agency: IAgency
  is_have_bet_south?: boolean
  is_have_bet_north?: boolean
  is_have_bet_central?: boolean
}

export interface IBetResultDetail {
  agency: IAgency
  bet_detail: IBetResultDetailInner[]
}

export interface IBetResultDetailInner {
  bets: IBetRaw[]
  statistic: IBetStatistic[]
  win: IBetWin[]
  province_acronym: IProvinceAcronym[]
}
// province_acronym
export interface IProvinceAcronym {
  name: string
  acronym: string
}

export interface IBetStatistic {
  id: number
  bet_id: number
  rule_id: string
  score: number
  money_bet: number
  created_at: Date
  updated_at: Date
  deleted_at: null
}

export interface IStatistic {
  rule: string
  score: number
  money: number
}

export interface IBetRaw {
  id: number
  open_date: Date
  agency_id: number
  region_unique_key: string
  bets: string[]
  created_at: Date
  updated_at: Date
  deleted_at: null
}
export interface IBetWin {
  id: number
  bet_id: number
  bet_win: string
  score: number
  money_win: number
  created_at: Date
  updated_at: Date
  deleted_at: null
}
