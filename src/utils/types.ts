import { ChangeEvent, FormEvent } from 'react'
import {
  IAgency,
  IBetResultDetailInner,
  IProvince,
  IRegion,
  IRuleAcronym,
} from './interface'

export type FormSubmit = FormEvent<HTMLFormElement>
export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLSelectElement
>

export type RegionContextType = {
  region: string
}
export type DateContextType = {
  date: Date | undefined
  updateDate: (date: Date) => void
}

export type BetContextType = {
  bet: IBetResultDetailInner | null
  updateBet: (bet: IBetResultDetailInner) => void
}

export type AgencyContextType = {
  agencies: IAgency[]
  agency: IAgency | null
  updateAgency: (agency: IAgency) => void
}

export type GlobalContextType = {
  north: IRegion | null
  central: IRegion | null
  south: IRegion | null
}

export type SettingContextType = {
  rules: IRuleAcronym[]
  provinces: IProvince[]
}

export type IBetType = 0 | 1 | 2 //0: diem,xac 1:co 2:trung

export type IFilter = {
  agency_id?: string
  open_date: string
  region_unique_key?: string
}
export type Method = 'POST' | 'GET' | 'PUT' | 'DELETE'
