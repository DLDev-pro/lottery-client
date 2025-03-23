import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { PATHS } from '@/utils/constants'
import Calender from './components/common/Calender'
import SlideBar from './components/common/SlideBar'
import FormAgency from './components/customer/FormCustomer'
import BetDetail from './pages/BetDetail'
import Customer from './pages/Customer'
import Login from './pages/Login'
import Radio from './pages/Radio'
import Result from './pages/Result'
import ResultCustomer from './pages/ResultCustomer'
import ResultLottery from './pages/ResultLottery'
import Setting from './pages/Setting'
import TypeLottery from './pages/TypeLottery'

export default function Router() {
  const Layout = () => {
    return (
      <div className="flex">
        <SlideBar />
        <div
          className="flex flex-col w-full
        transition-all duration-300
        md:ml-[240px]"
        >
          <Calender />
          <div className="p-3 pt-0 mt-12">
            <Outlet />
          </div>
        </div>
        <Toaster />
      </div>
    )
  }

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const token = sessionStorage.getItem('token')

    if (!token) {
      return <Navigate to="/login" replace />
    }

    return children
  }

  const routerElements = useRoutes([
    {
      path: PATHS.HOME,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: PATHS.CAI_DAT_HE_THONG,
          element: <Setting />,
        },
        {
          path: PATHS.MIEN_BAC,
          element: <Result />,
        },
        {
          path: PATHS.MIEN_NAM,
          element: <Result />,
        },
        {
          path: PATHS.MIEN_TRUNG,
          element: <Result />,
        },

        {
          path: PATHS.TONG_KET_KHACH_HANG,
          element: <ResultCustomer />,
        },
        {
          path: PATHS.KET_QUA_SO_XO,
          element: <ResultLottery />,
        },
        {
          path: PATHS.LOAI_BAT_CUOC,
          element: <TypeLottery />,
        },
        {
          path: PATHS.DAI_SO_XO,
          element: <Radio />,
        },
        {
          path: PATHS.KHACH_HANG,
          element: <Customer />,
        },
        {
          path: PATHS.DAT_CUOC_CHI_TIET,
          element: <BetDetail />,
        },
        {
          path: PATHS.SPECIAL,
          element: <Result />,
        },
        {
          path: PATHS.FORM,
          element: <FormAgency />,
        },
      ],
    },
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return routerElements
}
