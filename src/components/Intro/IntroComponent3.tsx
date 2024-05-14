'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function IntroComponent3() {
  return (
    <div
      // style={{ backgroundImage: 'url("/assets/intro/section3bg.png")' }}
      className="relative w-full snap-start snap-mandatory snap-always overflow-x-auto h-screen flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden"
    >
      <Image src={'/assets/intro/section3bg.png'} alt="line" fill objectFit="cover" className="z-0 md:flex hidden" />
      <Image
        src={'/assets/intro/mobile/section3bg.png'}
        alt="line"
        fill
        objectFit="cover"
        className="z-0 md:hidden flex"
      />
      <div className="md:w-[700px] lg:w-[1400px] flex md:flex-row flex-col md:justify-end z-50">
        <motion.div
          className="flex flex-col h-screen justify-around md:justify-center items-center md:items-end lg:mr-40 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: 'easeOut',
          }}
        >
          <div className="flex flex-col md:mb-0 mb-16 ">
            <span className="text-center lg:text-right text-sm lg:text-xl text-grey100">올해 방학엔 스펙 뭐 쌓지?</span>
            <span className="text-[1.6rem] text-center lg:text-[2.62rem] font-bold lg:pb-4 text-grey100">
              목표를 향해 함께 모여요
            </span>

            <span className="test-sm lg:text-[1.25rem] font-medium text-grey70 pt-5 text-center lg:text-right">
              공모전, 대회, 프로젝트, 창업팀까지 <br />
              다양한 목표의 팀빌딩을 링킷에서 할 수 있어요
              <br />
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-[15.5rem] h-[3rem] md:w-[17.18rem] md:h-[4.43rem] gap-4 mt-12 flex justify-center items-center bg-[#2F353C] text-[#fff] rounded-[3.75rem] cursor-pointer"
          >
            <Link href={'https://linkit.oopy.io/'}>
              <span className="font-medium text-sm md:text-base ml-4">7월에 진행되는 프로젝트 찾기</span>
            </Link>
            <Image src={'/assets/icons/right_arrow.svg'} width={17} height={1} alt="right arrow" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
