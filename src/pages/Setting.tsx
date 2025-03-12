import { authApi, globalApi } from '@/apis'
import { useToast } from '@/components/ui/use-toast'
import { ISetting, IUpdatePassword } from '@/utils/interface'
import { InputChange } from '@/utils/types'
import { useState } from 'react'

export default function Setting() {
  const [setting, setSetting] = useState<ISetting>({
    font_size: 12,
    data_store_day: 9,
    show_bet_score: 1,
  })

  const [password, setPassword] = useState<IUpdatePassword>({
    old_password: '',
    new_password: '',
    confirm_password: '',
  })

  const { toast } = useToast()
  const handleChange = (e: InputChange) => {
    const { name, value } = e.target

    setSetting({
      ...setting,
      [name]: value,
    })
  }

  const handleChangePassword = (e: InputChange) => {
    const { name, value } = e.target

    setPassword({
      ...password,
      [name]: value,
    })
  }

  const handleSaveSetting = async () => {
    try {
      if (password.new_password !== password.confirm_password) {
        toast({
          variant: 'destructive',
          title: 'Mật khẩu không khớp',
        })
      }

      // Call API to save setting
      const promise1 = await authApi.UpdatePassword({
        old_password: password.old_password,
        new_password: password.new_password,
      })
      const promise2 = await globalApi.UpdateSetting({
        font_size: parseInt(setting.font_size.toString()),
        data_store_day: parseInt(setting.data_store_day.toString()),
        show_bet_score: parseInt(setting.show_bet_score.toString()),
      })

      if (promise1.status === 200 && promise2.status === 200) {
        toast({
          variant: 'success',
          title: 'Thành công',
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Thất bại',
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Lỗi',
      })
    }
  }

  return (
    <div className='bg-gray-100 p-4'>
      <div className='text-lg font-semibold px-4 py-2 rounded-t-lg'>
        CÀI ĐẶT CƠ BẢN
      </div>

      <div className='p-4 space-y-6'>
        {/* Cỡ chữ và Ngày lưu dữ liệu */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-700'>Cỡ chữ</label>
            <input
              type='number'
              className='w-full p-2 border rounded'
              value={setting.font_size}
              name='font_size'
              onChange={handleChange}
            />
          </div>
          <div>
            <label className='block text-gray-700'>Ngày lưu dữ liệu</label>
            <input
              type='number'
              className='w-full p-2 border rounded'
              value={setting.data_store_day}
              name='data_store_day'
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <h3 className='font-semibold text-gray-700 mb-2'>
            HIỂN THỊ TIỀN CƯỢC - ĐIỂM
          </h3>
          <div className='flex items-center space-x-4'>
            <label className='flex items-center space-x-2'>
              <input
                type='radio'
                name='display'
                defaultChecked
              />
              <span>Hiển thị tiền xác</span>
            </label>
            <label className='flex items-center space-x-2'>
              <input
                type='radio'
                name='display'
              />
              <span>Hiển thị điểm</span>
            </label>
          </div>
        </div>

        {/* Quản lý mật khẩu */}
        <div>
          <h3 className='font-semibold text-gray-700 mb-2'>QUẢN LÝ MẬT KHẨU</h3>
          <div className='space-y-4'>
            <input
              type='password'
              placeholder='Mật khẩu cũ'
              className='w-full p-2 border rounded'
              value={password.old_password}
              name='old_password'
              onChange={handleChangePassword}
            />
            <input
              type='password'
              placeholder='Mật khẩu'
              className='w-full p-2 border rounded'
              value={password.new_password}
              name='new_password'
              onChange={handleChangePassword}
            />
            <input
              type='password'
              placeholder='Lặp lại mật khẩu'
              className='w-full p-2 border rounded'
              value={password.confirm_password}
              name='confirm_password'
              onChange={handleChangePassword}
            />
          </div>
        </div>

        <div className='text-right'>
          <button
            onClick={handleSaveSetting}
            className='bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2'
          >
            <span>💾</span>
            <span>LƯU LẠI</span>
          </button>
        </div>
      </div>
    </div>
  )
}
