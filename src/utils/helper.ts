export const autoLogout = async () => {
  if (typeof window !== 'undefined') {
    // await logout()
    window.location.href = '/login'
    sessionStorage.clear()
  }
}
