/* eslint-disable @typescript-eslint/no-explicit-any */
import LOGO from '@/assets/images/logo-898.png'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import { useToast } from '@/components/ui/use-toast'

import { authApi } from '@/apis'
import Loading from '@/components/common/Loading'
import { PATHS } from '@/utils/constants'
import { ILoginUser } from '@/utils/interface'
import { FormSubmit, InputChange } from '@/utils/types'
import { validationLogin } from '@/utils/validation/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

export default function Login() {
  const initialValues: ILoginUser = {
    username: '',
    password: '',
  }

  const { toast } = useToast()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState<ILoginUser>(initialValues)
  const [togglePassword, setTogglePassword] = useState(false)

  const token = localStorage.getItem('token')

  const handleSubmit = async (e: FormSubmit) => {
    e.preventDefault()
    setLoading(true)
    try {
      //validation
      const error = validationLogin(values)
      if (error.size > 0) {
        error.forEach((value: string, key: string) => {
          toast({
            variant: 'destructive',
            title: 'Sai ' + key,
            description: value,
          })
        })
        setLoading(false)
        return
      }

      // Call API to login user
      const response = await authApi.Login(values.username, values.password)
      const { data, status } = response
      if (data.status === 404) {
        console.log(data)
        toast({
          variant: 'destructive',
          title: 'Tên đăng nhập hoặc mật khẩu không chính xác',
        })
        setLoading(false)

        return
      } else {
        localStorage.setItem('token', data.data.access_token)
        setValues(initialValues)

        toast({
          variant: 'success',
          title: 'Thành công',
        })
        window.location.href = PATHS.HOME

        setLoading(false)
      }
    } catch (error: any) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Thất bại',
      })
      return
    }
  }

  const handleChange = (e: InputChange) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  if (token) {
    window.location.href = PATHS.HOME
  }

  return (
    <div className="h-screen flex pt-24 bg-black">
      <Toaster />

      {loading && <Loading />}
      <Card className="mx-auto max-w-sm bg-black border-none">
        <CardHeader className="space-y-1">
          <img src={LOGO} alt="logo" />
        </CardHeader>
        <CardContent>
          <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                id="name"
                type="text"
                placeholder="name"
                required
                name="username"
                className="bg-transparent focus:bg-white focus:text-black text-white"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex relative">
                <Input
                  id="password"
                  type={togglePassword ? 'text' : 'password'}
                  required
                  name="password"
                  className="bg-transparent focus:bg-white focus:text-black text-white"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="absolute top-1/2 right-2 -translate-y-1/2"
                >
                  {togglePassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-fit mx-auto bg-white text-black">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
