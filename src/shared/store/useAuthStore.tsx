import { create } from 'zustand'
import { deleteCookie, getCookie } from 'cookies-next'
import { logoutApi } from '@/features/login/api/authApi'

interface userInfoProps {
  isLogin: boolean // 로그인 여부
  checkLogin: () => void // 로그인 여부 확인 함수
  logout: () => void // 로그아웃
}

export const useUserStore = create<userInfoProps>((set) => {
  return {
    user: null,
    isLogin: false,

    checkLogin: () => {
      const accessToken = getCookie('access-token')

      if (accessToken) {
        set({ isLogin: true })
      } else {
        set({ isLogin: false })
      }
    },

    logout: async () => {
      await logoutApi() // 로그아웃 API 호출
      deleteCookie('access-token')
      set({ isLogin: false })
    },
  }
})