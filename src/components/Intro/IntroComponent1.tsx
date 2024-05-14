'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
type PositionKey = '개발자' | '디자이너' | '마케터' | '기획자' | '리서처' | '비즈니스'

export default function IntroComponentTemp() {
  const [selectedRole, setSelectedRole] = useState<PositionKey>('개발자')

  const positions: Record<PositionKey, { text: string; image: string; bgImage: string; mobilebg: string }> = {
    개발자: {
      text: '개발자 포지션',
      image: '/assets/intro/developer.png',
      bgImage: '/assets/intro/developerbg.png',
      mobilebg: '/assets/intro/mobile/developerbg.png',
    },
    디자이너: {
      text: '디자이너 포지션',
      image: '/assets/intro/designer.png',
      bgImage: '/assets/intro/designerbg.png',
      mobilebg: '/assets/intro/mobile/designerbg.png',
    },
    마케터: {
      text: '마케터 포지션',
      image: '/assets/intro/marketer.png',
      bgImage: '/assets/intro/marketerbg.png',
      mobilebg: '/assets/intro/mobile/marketerbg.png',
    },
    기획자: {
      text: '기획자 포지션',
      image: '/assets/intro/planner.png',
      bgImage: '/assets/intro/plannerbg.png',
      mobilebg: '/assets/intro/mobile/plannerbg.png',
    },
    리서처: {
      text: '리서처 포지션',
      image: '/assets/intro/researcher.png',
      bgImage: '/assets/intro/researcherbg.png',
      mobilebg: '/assets/intro/mobile/researcherbg.png',
    },
    비즈니스: {
      text: '비즈니스 포지션',
      image: '/assets/intro/business.png',
      bgImage: '/assets/intro/businessbg.png',
      mobilebg: '/assets/intro/mobile/businessbg.png',
    },
  }

  return (
    <>
      <div
        className="w-full relative pt-5 md:pt-0 snap-start snap-mandatory snap-always overflow-x-auto h-screen flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-cover bg-opacity-50 overflow-hidden"
        // style={{ backgroundImage: `url("${positions[selectedRole].bgImage}")` }}
      >
        {/* PC 배경 */}
        <motion.div
          key={positions[selectedRole].bgImage}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="absolute inset-0 z-0 sm:flex hidden"
        >
          <Image src={positions[selectedRole].bgImage} alt="line" fill objectFit="cover" className="" />\
        </motion.div>

        {/* 모바일 배경 */}
        <motion.div
          key={positions[selectedRole].mobilebg}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute inset-0 z-0 sm:hidden flex"
        >
          <Image
            src={positions[selectedRole].mobilebg}
            alt="line"
            fill
            objectFit="cover"
            className="z-0 sm:hidden flex"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-[82%] md:w-[31.6rem] h-[22.9rem] md:h-[21.9rem] z-50 shadow-frame-shaow rounded-[3.125rem] bg-[rgba(79, 81, 98, 0.07)] backdrop-blur-2xl"
        >
          <div className="py-[1.4rem] lg:py-[1.65rem] flex flex-col items-center z-50">
            <div className="flex gap-4 font-medium backdrop-blur-[37px]">
              <span className="">성공을</span>
              <Image src={'/assets/intro/lineLink.svg'} alt="line" width={50} height={0.1} />

              <span className="">잇는 팀빌딩</span>
            </div>

            <div className="flex flex-col md:flex-row items-center w-[22.4rem] justify-start md:gap-10 pt-10">
              <motion.div
                key={selectedRole + '-image'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <Image
                  src={positions[selectedRole].image}
                  width={124}
                  height={124}
                  alt=""
                  className="rounded-[1.875rem] w-[6.9rem] h-[6.9rem] md:w-auto md:h-auto"
                />
              </motion.div>

              <div className="flex flex-col text-left justify-center p-4 md:p-0">
                <span className="text-sm font-medium text-center md:text-left">7월 팀빌딩을 위한</span>
                <motion.span
                  key={selectedRole + '-text'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  layout // Maintains text position and size during transitions
                  className="font-bold text-[24px] md:text-[1.8rem]"
                >
                  {positions[selectedRole].text}
                </motion.span>
              </div>
            </div>
            <Link href={'https://nn4e1.channel.io/home'}>
              <div className="flex items-center gap-4 md:mt-8 cursor-pointer justify-center w-[14.25rem] h-[63px] lg:h-[4.4rem] bg-[#2F353C] rounded-[3.75rem]">
                <span className="text-sm lg:text-lg text-[#fff]">사전 신청하러 가기</span>
                <Image src={'/assets/icons/right_arrow.svg'} width={17} height={1} alt="right_arrow" />
              </div>
            </Link>
          </div>
        </motion.div>

        <div className="flex justify-between mt-5 shadow-gray-07 items-center px-7 z-50 w-[88%] md:w-[39.5rem] h-[3.68rem] bg-[rgba(79, 81, 98, 0.07)] rounded-[3.91rem] backdrop-blur-2xl">
          {Object.keys(positions).map((role) => (
            <span
              key={role}
              className={`cursor-pointer ${selectedRole === role ? 'text-sm lg:text-xl font-bold grey100' : 'text-xs lg:text-base font-medium text-grey70'}`}
              onClick={() => setSelectedRole(role as PositionKey)}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
