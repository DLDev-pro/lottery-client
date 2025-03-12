import { Button } from '@/components/ui/button'
import { PATHS } from '@/utils/constants'
import { autoLogout } from '@/utils/helper'
import { BiSolidLogOut, BiSolidRightArrow } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const routes = [
  { path: PATHS.HOME, label: 'Trang chủ' },
  { path: PATHS.MIEN_BAC, label: 'Tổng kết Miền Bắc' },
  { path: PATHS.MIEN_TRUNG, label: 'Tổng kết Miền Trung' },
  { path: PATHS.MIEN_NAM, label: 'Tổng kết Miền Nam' },
  // { path: PATHS.THONG_KE_SO_CUOC, label: 'Thống kê số cược' },
  { path: PATHS.TONG_KET_KHACH_HANG, label: 'Tổng kết khách hàng' },
  { path: PATHS.KET_QUA_SO_XO, label: 'Kết quả sổ xố' },
  { path: PATHS.KHACH_HANG, label: 'Đại lý' },
  { path: PATHS.DAI_SO_XO, label: 'Đài sổ xố' },
  { path: PATHS.LOAI_BAT_CUOC, label: 'Loại bắt cược' },
  // { path: PATHS.CAI_DAT_CAN_SO, label: 'Cài đặt cân số' },
  { path: PATHS.CAI_DAT_HE_THONG, label: 'Cài đặt hệ thống' },
]

const SlideBar = () => {
  const { pathname } = useLocation()
  const isActive = (path: string) => {
    return pathname === path ? 'text-white' : 'text-black'
  }

  return (
    <>
      <div className="bg-main max-w-[240px] fixed w-full h-screen">
        <div className="flex flex-col space-y-4 p-5">
          {routes.map((route) => (
            <Link to={route.path} key={route.path}>
              <Button
                className={`rounded-none border-b w-full justify-start bg-transparent ${isActive(
                  route.path
                )}`}
              >
                <BiSolidRightArrow />
                {route.label}
              </Button>
            </Link>
          ))}
          <Button
            onClick={autoLogout}
            className={`rounded-none border-b w-full justify-start bg-transparent text-black`}
          >
            <BiSolidLogOut />
            Đăng xuất
          </Button>
        </div>
      </div>
    </>
  )
}

export default SlideBar
