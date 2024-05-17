'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { myDataState } from '@/context/recoil-context'
type PositionKey = '개발자' | '디자이너' | '마케터' | '기획자' | '리서처' | '비즈니스'

export default function IntroComponentTemp() {
  const [selectedRole, setSelectedRole] = useState<PositionKey>('개발자')

  // recoil 데이터 가져오기
  const [myData, setMyData] = useRecoilState(myDataState)

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
        className="relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always flex-col items-center justify-center overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat pt-5 md:pt-0"
        // style={{ backgroundImage: `url("${positions[selectedRole].bgImage}")` }}
      >
        {/* PC 배경 */}
        <motion.div
          key={positions[selectedRole].bgImage}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="absolute inset-0 z-0 hidden sm:flex"
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
          className="absolute inset-0 z-0 flex sm:hidden"
        >
          <Image
            src={positions[selectedRole].mobilebg}
            alt="line"
            fill
            objectFit="cover"
            className="z-0 flex sm:hidden"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
<<<<<<< HEAD
          className="bg-[rgba(79, 81, 98, 0.07)] z-10 h-[22.9rem] w-[82%] rounded-[3.125rem] shadow-frame-shaow backdrop-blur-2xl md:h-[21.9rem] md:w-[31.6rem]"
=======
          className="bg-[rgba(79, 81, 98, 0.07)] z-50 h-[22.9rem] w-[82%] rounded-[3.125rem] shadow-frame-shaow backdrop-blur-2xl md:h-[21.9rem] md:w-[31.6rem]"
>>>>>>> b55760a (fix: QA6 apply)
        >
          <div className="z-50 flex flex-col items-center py-[1.4rem] lg:py-[1.65rem]">
            <div className="flex gap-4 font-medium backdrop-blur-[37px]">
              <span className="">성공을</span>
              <Image src={'/assets/intro/lineLink.svg'} alt="line" width={50} height={0.1} />

              <span className="">잇는 팀빌딩</span>
            </div>

            <div className="flex w-[22.4rem] flex-col items-center justify-start pt-10 md:flex-row md:gap-10">
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
                  className="h-[6.9rem] w-[6.9rem] rounded-[1.875rem] md:h-auto md:w-auto"
                />
              </motion.div>

              <div className="flex flex-col justify-center p-4 text-left md:p-0">
                <span className="text-center text-sm font-medium md:text-left">7월 팀빌딩을 위한</span>
                <motion.span
                  key={selectedRole + '-text'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  layout // Maintains text position and size during transitions
                  className="text-[24px] font-bold md:text-[1.8rem]"
                >
                  {positions[selectedRole].text}
                </motion.span>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link href={'https://bit.ly/4bitsK0'}>
=======
            <Link href={'https://tally.so/r/w7dOW6'}>
>>>>>>> b55760a (fix: QA6 apply)
=======
            <Link href={'https://bit.ly/4bitsK0'}>
>>>>>>> 7a8581f (fix: linkDataFix)
              <div className="flex h-[63px] w-[14.25rem] cursor-pointer items-center justify-center gap-4 rounded-[3.75rem] bg-[#2F353C] md:mt-8 lg:h-[4.4rem]">
                <span className="text-sm text-[#fff] lg:text-lg">사전 신청하러 가기</span>
                <Image src={'/assets/icons/right_arrow.svg'} width={17} height={1} alt="right_arrow" />
              </div>
            </Link>
          </div>
        </motion.div>

<<<<<<< HEAD
        <div className="bg-[rgba(79, 81, 98, 0.07)] z-10 mt-5 flex h-[3.68rem] w-[88%] items-center justify-between rounded-[3.91rem] px-7 shadow-gray-07 backdrop-blur-2xl md:w-[39.5rem]">
=======
        <div className="bg-[rgba(79, 81, 98, 0.07)] z-50 mt-5 flex h-[3.68rem] w-[88%] items-center justify-between rounded-[3.91rem] px-7 shadow-gray-07 backdrop-blur-2xl md:w-[39.5rem]">
>>>>>>> b55760a (fix: QA6 apply)
          {Object.keys(positions).map((role) => (
            <span
              key={role}
              className={`cursor-pointer ${selectedRole === role ? 'grey100 text-sm font-bold lg:text-xl' : 'text-xs font-medium text-grey70 lg:text-base'}`}
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
