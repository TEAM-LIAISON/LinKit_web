import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent7() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(180deg, #F1F3F7 19.19%, rgba(252, 252, 253, 0) 112.86%))',
      }}
<<<<<<< HEAD
      className="relative flex  h-screen min-h-screen w-full snap-mandatory  snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-white bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
=======
      className="bg-white relative  flex h-screen min-h-screen w-full  snap-mandatory snap-start snap-always flex-col items-center justify-start overflow-hidden overflow-x-auto bg-opacity-50 bg-cover bg-no-repeat py-20 lg:justify-center"
>>>>>>> 8144e1e (fix: 5차 QA 수정)
    >
      <Image src={'/assets/intro/section7bg.png'} alt="line" fill objectFit="cover" className="z-0 hidden md:flex" />

      <Image
        src={'/assets/intro/mobile/section7bg.png'}
        alt="line"
        fill
        objectFit="cover"
        className="z-0 flex md:hidden"
      />

      <motion.div
<<<<<<< HEAD
        className="z-50 flex flex-col lg:w-[1200px] lg:flex-row"
=======
        className="z-50 flex flex-col lg:w-[1400px] lg:flex-row"
>>>>>>> 8144e1e (fix: 5차 QA 수정)
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        {/* left */}
<<<<<<< HEAD
        <div className="lg: flex items-center justify-center lg:h-full lg:w-1/2 lg:justify-start">
          <div className=" flex flex-col items-center pb-8 lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[9.75rem] lg:p-[0.6rem] lg:text-base">
              2. 간결한 매칭 서비스
=======
        <div className="flex items-center justify-center lg:h-full lg:w-1/2">
          <div className=" flex flex-col items-center pb-8 lg:items-start lg:pb-20">
            <div className="w-[9rem] rounded-lg bg-grey20 p-1 text-center text-sm lg:w-[9.75rem] lg:p-[0.6rem] lg:text-base">
              2 간결한 매칭 서비스
>>>>>>> 8144e1e (fix: 5차 QA 수정)
            </div>
            <span className="pt-3 text-center text-[1.6rem] font-bold lg:text-left lg:text-[2.62rem] lg:leading-[3.625rem]">
              프로필만 등록하면
              <br />
              쏟아지는 추천 매칭
              <br />
            </span>
            <span className="pt-2 text-center text-xs font-medium leading-4 text-grey70 lg:text-xl">
              가이드에 맞게 프로필을 등록하면 <br className="flex sm:hidden" />
              사용자들이 매칭을 요청해요
            </span>
          </div>
        </div>
        {/* right */}

        <div className="flex w-full flex-col items-center justify-center pt-2 lg:h-full lg:w-[50%]">
          <div className="flex flex-col items-center sm:w-[41rem] ">
            <div className="flex w-full flex-col items-center justify-start">
              <div className="flex w-full justify-start text-lg font-bold lg:text-[1.36rem]">내가 받은 매칭</div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request1.png'}
                  width={652}
                  height={113}
                  alt="request1"
                  className="mt-3 hidden shadow-alarm-shadow md:flex"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request2.png'}
                  width={537}
                  height={80}
                  alt="request1"
                  className="mt-3 hidden shadow-alarm-shadow md:flex"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request3.png'}
                  width={503}
                  height={74}
                  alt="request1"
                  className="mt-3 hidden shadow-alarm-shadow md:flex"
                />
              </motion.div>

              {/* 모바알 */}
              <Image
                src={'/assets/intro/request/request1mobile.png'}
                width={333}
                height={104}
                alt="request1"
                className="mt-2 flex shadow-alarm-shadow md:hidden"
              />
              <Image
                src={'/assets/intro/request/request2mobile.png'}
                width={285}
                height={89}
                alt="request1"
                className="mt-2 flex shadow-alarm-shadow md:hidden"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
