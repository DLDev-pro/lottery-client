import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/`

const GetRegion = async () => {
  const response = await apiCaller('GET', `${PATH}region`)

  return response
}
const GetLotterySchedule = async () => {
  const response = await apiCaller('GET', `${PATH}lotery-schedule`)

  return response
}

const GetAllRule = async () => {
  const response = await apiCaller('GET', `${PATH}rule`)

  return response
}

const GetSetting = async () => {
  const response = await apiCaller('GET', `${PATH}system-setting`)

  return response
}

const UpdateSetting = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}system-setting`, data)

  return response
}

const GetLotteryResult = async (data: any) => {
  const response = await apiCaller('GET', `${PATH}lottery-result?date=${data.date}&region_unique_key=${data.region}`, data)
  return response
}

export { GetRegion, GetLotterySchedule, GetSetting, UpdateSetting, GetAllRule, GetLotteryResult }
