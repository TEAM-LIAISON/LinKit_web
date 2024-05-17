'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function IntroComponent3() {
  return (
    <div
      // style={{ backgroundImage: 'url("/assets/intro/section3bg.png")' }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4147c61 (fix: StyleFix)
      className="relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always items-center justify-center overflow-hidden overflow-x-auto bg-[#F0F2F6] bg-opacity-50 bg-cover bg-no-repeat"
    >
      {/* PC 배경 */}
      <Image src={'/assets/intro/section3bg.png'} alt="line" fill objectFit="cover" className="z-0 hidden lg:flex" />
      {/* 모바일 배경 */}
=======
      className="bg-white relative flex h-screen min-h-screen w-full snap-mandatory snap-start snap-always items-center justify-center overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat"
    >
      {/* PC 배경 */}
      <Image src={'/assets/intro/section3bg.png'} alt="line" fill objectFit="cover" className="z-0 hidden lg:flex" />
<<<<<<< HEAD
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
      {/* 모바일 배경 */}
>>>>>>> b55760a (fix: QA6 apply)
      <Image
        src={'/assets/intro/mobile/section3bg.png'}
        alt="line"
        fill
        objectFit="cover"
        className="z-0 flex lg:hidden"
      />
      <div className="z-50 flex flex-col lg:w-[1400px] lg:flex-row lg:justify-end">
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className="flex h-screen flex-col items-center justify-center py-20 lg:mr-40 lg:mt-16 lg:items-end lg:justify-center"
=======
          className="flex h-screen flex-col items-center justify-between py-20 lg:mr-40 lg:mt-16 lg:items-end lg:justify-center"
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
          className="flex h-screen flex-col items-center justify-start py-20 lg:mr-40 lg:mt-16 lg:items-end lg:justify-center"
>>>>>>> b55760a (fix: QA6 apply)
=======
          className="flex h-screen flex-col items-center justify-center py-20 lg:mr-40 lg:mt-16 lg:items-end lg:justify-center"
>>>>>>> 4147c61 (fix: StyleFix)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: 'easeOut',
          }}
        >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="mb-7 mt-40 flex flex-col lg:mb-16">
            <span className="text-center text-sm text-grey100 lg:text-right lg:text-xl">올해 방학엔 스펙 뭐 쌓지?</span>
            <span className="text-center text-[1.6rem] font-bold text-grey100 lg:pb-4 lg:text-[2.62rem]">
              목표를 향해 함께 모여보세요
<<<<<<< HEAD
=======
          <div className="mb-16 flex flex-col md:mb-0 ">
=======
          <div className="mb-7 flex flex-col md:mb-0 lg:mb-16">
>>>>>>> b55760a (fix: QA6 apply)
=======
          <div className="mb-7 mt-40 flex flex-col lg:mb-16">
>>>>>>> 4147c61 (fix: StyleFix)
            <span className="text-center text-sm text-grey100 lg:text-right lg:text-xl">올해 방학엔 스펙 뭐 쌓지?</span>
            <span className="text-center text-[1.6rem] font-bold text-grey100 lg:pb-4 lg:text-[2.62rem]">
              목표를 향해 함께 모여요
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
>>>>>>> 8d90821 (fix: FixBug)
            </span>

            <span className="test-sm pt-5 text-center font-medium text-grey70 lg:text-right lg:text-[1.25rem]">
              공모전, 대회, 프로젝트, 창업팀까지 <br />
              다양한 목표의 팀빌딩을 링킷에서 할 수 있어요
              <br />
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
            className="flex h-[3rem] w-[15.5rem] cursor-pointer items-center justify-center gap-4 rounded-[3.75rem] bg-[#2F353C] text-[#fff] md:h-[4.43rem] md:w-[17.18rem] lg:mt-12"
          >
            <Link href={'https://bit.ly/3V5qBgT'}>
<<<<<<< HEAD
=======
            className="mt-12 flex h-[3rem] w-[15.5rem] cursor-pointer items-center justify-center gap-4 rounded-[3.75rem] bg-[#2F353C] text-[#fff] md:h-[4.43rem] md:w-[17.18rem]"
=======
            className="flex h-[3rem] w-[15.5rem] cursor-pointer items-center justify-center gap-4 rounded-[3.75rem] bg-[#2F353C] text-[#fff] md:h-[4.43rem] md:w-[17.18rem] lg:mt-12"
>>>>>>> b55760a (fix: QA6 apply)
          >
            <Link href={'https://linkit.oopy.io/'}>
>>>>>>> 8144e1e (fix: 5차 QA 수정)
=======
>>>>>>> 7a8581f (fix: linkDataFix)
              <span className="ml-4 text-sm font-medium md:text-base">7월에 진행되는 프로젝트 찾기</span>
            </Link>
            <Image src={'/assets/icons/right_arrow.svg'} width={17} height={1} alt="right arrow" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
