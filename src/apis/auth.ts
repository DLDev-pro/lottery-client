import apiCaller from '@/configs/apiCall'
import { API_URL } from '@/utils/constants'
import { ICreateUser } from '@/utils/interface'

const PATH = `${API_URL}/api/auth`

const Login = async (username: string, password: string) => {
  const path = `${PATH}/login`
  const response = await apiCaller('POST', path, { username, password })

  return response
}

const Register = async (data: ICreateUser) => {
  const path = `${PATH}/register`
  const response = await apiCaller('POST', path, data)

  return response
}

const UpdatePassword = async (data: unknown) => {
  const path = `${PATH}/update-password`
  const response = await apiCaller('PUT', path, data)

  return response
}

export { Login, Register, UpdatePassword }
