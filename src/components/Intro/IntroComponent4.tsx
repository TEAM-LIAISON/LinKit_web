'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function IntroComponent4() {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2024-06-24T00:00:00').getTime() // 목표 날짜 설정 및 숫자로 변환
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
      className="w-full snap-start snap-mandatory snap-always overflow-x-auto h-screen flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden py-20"
    >
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <span className="w-[11rem] lg:w-[17.3rem] text-sm lg:text-[1.25rem] text-grey70 font-medium bg-grey30 text-center py-1 lg:py-[0.44rem] rounded-lg">
          {countdown}
        </span>
        <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3">현재 사전 신청 진행중 이에요</span>
        <span className="text-sm lg:text-xl text-grey70 font-medium pt-2">
          사전 신청 등록하고 정규 프로필까지 <br className="lg:hidden" />
          등록 완료하면 스타벅스 커피 쿠폰 지급
        </span>
        <span className="text-sm text-grey50 font-medium pt-2">*추첨 된 30명에게 지급될 예정입니다</span>
      </motion.div>

      <motion.div
        className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-4 lg:mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        <div className="w-[90%] lg:w-[72.8rem] h-auto lg:h-[16rem] bg-[#fff] p-5 flex flex-col items-center rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold lg:pt-3">사전 프로필 등록</h2>
            <span className="text-sm text-grey70 pt-1">05월 15일부터 06월 23일까지</span>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-2 pt-6">
            <Link href={'https://linkit.oopy.io/'}>
              <div className="w-full lg:w-[23rem] py-3 lg:h-[5.125rem] bg-grey20 bg-opacity-80 flex justify-center items-center text-sm lg:text-lg font-normal rounded-md">
                1. 참여하고 싶은 프로젝트 찾아보기
              </div>
            </Link>

            <Link href={'https://tally.so/r/w7dOW6'}>
              <div className="w-full lg:w-[23rem] py-3 lg:h-[5.125rem] bg-grey20 bg-opacity-80 flex justify-center items-center text-sm lg:text-lg font-normal rounded-md">
                2. 1분만에 사전신청 하기
              </div>
            </Link>
            <div className="w-full lg:w-[23rem] py-3 lg:h-[5.125rem] bg-[#2563EB] text-[#fff] flex justify-center items-center text-sm lg:text-lg font-normal rounded-md">
              ☕️ 사전신청 시 스타벅스 커피 쿠폰 지급
            </div>
          </div>

          <span className="text-sm text-grey50 font-medium pt-4">*추첨 된 30명에게 지급될 예정입니다</span>
        </div>
      </motion.div>
    </div>
  )
}
