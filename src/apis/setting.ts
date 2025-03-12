import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/setting/`

const GetProvinceAcronym = async () => {
  const response = await apiCaller('GET', `${PATH}province-acronym`)

  return response
}

const UpdateProvinceAcronym = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}province-acronym`, data)

  return response
}

const GetRuleAcronym = async () => {
  const response = await apiCaller('GET', `${PATH}rule-acronym`)

  return response
}

const UpdateRuleAcronym = async (data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}rule-acronym`, data)

  return response
}

export {
  GetProvinceAcronym,
  UpdateProvinceAcronym,
  GetRuleAcronym,
  UpdateRuleAcronym,
}
