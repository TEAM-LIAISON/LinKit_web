'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function IntroComponent4() {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2024-06-30T00:00:00').getTime() // 목표 날짜 설정 및 숫자로 변환
    const interval = setInterval(() => {
      const now = new Date().getTime() // 현재 날짜를 숫자로 변환
      const difference = targetDate - now // 숫자형 Date 값들의 차이 계산

      if (difference <= 0) {
        clearInterval(interval)
        setCountdown('00일 00시간 00분 00초')
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown(
        `${days}일 ${hours.toString().padStart(2, '0')}시간 ${minutes.toString().padStart(2, '0')}분 ${seconds.toString().padStart(2, '0')}초`,
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(180deg, #F1F3F7 19.19%, rgba(252, 252, 253, 0) 112.86%), url("/assets/intro/section4bg.png")',
      }}
      className="bg-white flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
    >
      <motion.div
        className="flex w-full flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <span className="w-auto rounded-lg bg-grey30 px-5 py-2 text-center text-sm font-medium text-grey70 lg:w-auto lg:py-[0.44rem] lg:text-[1.25rem]">
          {countdown}
        </span>
        <span className="pt-3 text-[1.6rem] font-bold lg:text-[2.62rem]">현재 사전 신청 진행중 이에요</span>
        <span className="pt-2 text-sm font-medium text-grey70 lg:text-xl">
          사전 신청 등록하고 정규 프로필까지 <br className="lg:hidden" />
          등록 완료하면 스타벅스 커피 쿠폰 지급
        </span>
        <span className="pt-2 text-sm font-medium text-grey50">*추첨 된 30명에게 지급될 예정입니다</span>
      </motion.div>

      <motion.div
        className="mt-4 flex w-full flex-col items-center justify-center gap-6 lg:mt-12 lg:flex-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <div className="flex h-auto w-[90%] flex-col items-center rounded-xl bg-[#fff] p-5 max-lg:mt-10 lg:w-[72.8rem]">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold lg:pt-3">사전 프로필 등록</h2>
            <span className="pt-1 text-sm text-grey70">05월 15일부터 06월 30일까지</span>
          </div>

          <div className="flex w-full flex-col gap-2 pt-6 lg:flex-row">
            <Link href={'https://bit.ly/3V5qBgT'}>
              <div className="flex w-full items-center justify-center rounded-md bg-grey20 bg-opacity-80 py-3 text-sm font-normal lg:h-[5.125rem] lg:w-[23rem] lg:text-lg">
                1. 참여하고 싶은 프로젝트 찾아보기
              </div>
            </Link>

            <Link href={'https://bit.ly/4bitsK0'}>
              <div className="flex w-full items-center justify-center rounded-md bg-grey20 bg-opacity-80 py-3 text-sm font-normal lg:h-[5.125rem] lg:w-[23rem] lg:text-lg">
                2. 1분만에 사전신청 하기
              </div>
            </Link>
            <div className="flex w-full items-center justify-center rounded-md bg-[#2563EB] py-3 text-sm font-normal text-[#fff] lg:h-[5.125rem] lg:w-[23rem] lg:text-lg">
              ☕️ 사전신청 시 스타벅스 커피 쿠폰 지급
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
