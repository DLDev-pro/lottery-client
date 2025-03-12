import { ILoginUser } from '@/utils/interface'

export const validationLogin = (data: ILoginUser) => {
  const errors: Map<string, string> = new Map<string, string>()

  if (!data.username) {
    errors.set('username', 'Tên đăng nhập không được để trống')
  }

  if (!data.password) {
    errors.set('password', 'Mật khẩu không được để trống')
  }

  return errors
}
