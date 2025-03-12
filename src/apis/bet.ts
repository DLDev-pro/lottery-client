import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'
import { IFilter } from '@/utils/types'

const PATH = `${API_URL}/api/bet`

const GetBets = async (filter: IFilter) => {
  let path = `${PATH}`
  if (filter.open_date) {
    path += `?open_date=${filter.open_date}`
  }
  if (filter.region_unique_key) {
    path += `&region_unique_key=${filter.region_unique_key}`
  }
  if (filter.agency_id) {
    path += `&agency_id=${filter.agency_id}`
  }

  const response = await apiCaller('GET', path)

  return response
}

const CreateBet = async (data: unknown) => {
  const response = await apiCaller('POST', PATH, data)

  return response
}

export { GetBets, CreateBet }
