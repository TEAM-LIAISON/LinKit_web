'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { getAccessToken, useAuthStore } from '@/shared/store/useAuthStore'
import { useEffect, useState } from 'react'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import UserMenu from './components/UserMenu'
import GuestMenu from './components/GuestMenu'
import MobileMenu from './components/MobileMenu'
import Link from 'next/link'
import ProfileMenu from './components/ProfileMenu'
import useNotificationSubscription from '@/shared/components/webSocket/useNotificationSubscription'
import useWebSocketStore from '@/shared/store/useWebSocketStore'

export default function Header() {
  const pathname = usePathname()
  const { isLogin, checkLogin, logout, emailId, setLoginState } = useAuthStore()
  const { initializeClient } = useWebSocketStore()
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const hideHeaderOnPaths = ['/login/onboarding-info', '/login/onboarding-agree', '/login/onboarding-complete']
  const basePath = pathname.split('?')[0]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = getAccessToken()
      if (accessToken) {
        checkLogin()
        initializeClient(accessToken)
      } else {
        setLoginState(false)
      }
      setLoading(false)
    }
  }, [checkLogin, initializeClient, setLoginState])

  useNotificationSubscription(emailId || '')

  if (hideHeaderOnPaths.includes(basePath)) {
    return null
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-[100] mb-1 flex h-[4rem] w-full justify-between bg-white px-4 text-sm md:px-10">
        <div className="flex h-full items-center">
          <Logo />
          <Navigation />
        </div>

        <div className="flex items-center font-normal text-grey90">
          {loading ? (
            isLogin ? (
              <div className="hidden gap-[1.38rem] md:flex">
                <Link className=" rounded-[1.375rem] bg-[#4D82F3] px-[1.62rem] py-[0.38rem] " href="/profile">
                  매칭 관리
                </Link>
                <button
                  className="toggle-button flex rounded-[1.38rem] py-[0.38rem] pr-[1.62rem] font-semibold"
                  onClick={toggleModal}
                >
                  마이페이지{' '}
                  <Image
                    src={isModalOpen ? '/common/icons/up_arrow.svg' : '/common/icons/under_arrow.svg'}
                    width={24}
                    height={24}
                    alt="arrow"
                  />
                </button>
                {isModalOpen && <ProfileMenu onClose={() => setIsModalOpen(false)} />}
              </div>
            ) : (
              <div className="hidden gap-[1.38rem] font-semibold md:flex">
                <button className="px-7"></button>
              </div>
            )
          ) : isLogin ? (
            <UserMenu />
          ) : (
            <GuestMenu />
          )}

          <button onClick={toggleMobileMenu} className="menu-toggle-button flex md:hidden">
            <Image
              src={isMobileMenuOpen ? '/common/icons/delete_icon.svg' : '/common/icons/mobile_menu_icon.svg'}
              width={26}
              height={26}
              alt="menu"
            />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && <MobileMenu isLogin={isLogin} onClose={closeMobileMenu} onLogout={logout} />}
    </>
  )
}
