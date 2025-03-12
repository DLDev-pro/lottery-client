import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'

const PATH = `${API_URL}/api/agency`
//crud

const GetAgencies = async () => {
  const response = await apiCaller('GET', PATH)

  return response
}

const GetAgency = async (id: string) => {
  const response = await apiCaller('GET', `${PATH}/${id}`)

  return response
}

const CreateAgency = async (data: unknown) => {
  const response = await apiCaller('POST', PATH, data)

  return response
}

const UpdateAgency = async (id: string, data: unknown) => {
  const response = await apiCaller('PUT', `${PATH}/${id}`, data)

  return response
}

const DeleteAgency = async (id: string) => {
  const response = await apiCaller('DELETE', `${PATH}/${id}`)

  return response
}

export { GetAgencies, GetAgency, CreateAgency, UpdateAgency, DeleteAgency }
