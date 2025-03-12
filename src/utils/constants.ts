export const API_URL =
  import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',

  // Add more paths here
  MIEN_BAC: '/mien-bac',
  MIEN_TRUNG: '/mien-trung',
  MIEN_NAM: '/mien-nam',
  THONG_KE_SO_CUOC: '/thong-ke-so-cuoc',
  TONG_KET_KHACH_HANG: '/tong-ket-khach-hang',
  KET_QUA_SO_XO: '/ket-qua-so-xo',
  KHACH_HANG: '/khach-hang',
  DAI_SO_XO: '/dai-so-xo',
  LOAI_BAT_CUOC: '/loai-bat-cuoc',
  CAI_DAT_CAN_SO: '/cai-dat-can-so',
  CAI_DAT_HE_THONG: '/cai-dat-he-thong',
  LOGOUT: '/logout',
  SPECIAL: '/:slug?agency_id=:id',

  DAT_CUOC_CHI_TIET: '/:slug/dat-cuoc/:id',
  FORM: '/khach-hang/form',
}

export const ID_NEGATIVE = -1
