import { ICreateUser } from '@/utils/interface'

export const validationRegister = (data: ICreateUser) => {
  const errors: Map<string, string> = new Map<string, string>()

  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const validPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])?[A-Za-z\d!@#$%^&*]{8,}$/

  if (!data.email) {
    errors.set('email', 'Email is required')
  } else if (!validEmail.test(data.email)) {
    errors.set('email', 'Email is invalid')
  }

  if (!data.password) {
    errors.set('password', 'Password is required')
  } else if (!validPassword.test(data.password)) {
    errors.set('password', 'Password is invalid')
  }

  if (!data.name) {
    errors.set('name', 'Name is required')
  } else if (data.name.length < 6 || data.name.length > 255) {
    errors.set('name', 'Name must be between 6 and 255 characters')
  }

  return errors
}
