import Image from 'next/image'
import { motion } from 'framer-motion'

export default function IntroComponent7() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(180deg, #F1F3F7 19.19%, rgba(252, 252, 253, 0) 112.86%))',
      }}
      className="relative w-full  snap-start snap-mandatory snap-always overflow-x-auto  h-screen flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover bg-white bg-opacity-50 overflow-hidden lg:py-24"
    >
      <Image src={'/assets/intro/section7bg.png'} alt="line" fill objectFit="cover" className="z-0 md:flex hidden" />

      <Image
        src={'/assets/intro/mobile/section7bg.png'}
        alt="line"
        fill
        objectFit="cover"
        className="z-0 md:hidden flex"
      />

      <motion.div
        className="lg:w-[1400px] flex flex-col lg:flex-row z-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          ease: 'easeOut',
        }}
      >
        {/* left */}
        <div className="lg:w-1/2 lg:h-full flex items-center justify-center">
          <div className=" flex flex-col items-center lg:items-start pb-8 lg:pb-20">
            <div className="text-sm lg:text-base text-center p-1 lg:p-[0.6rem] w-[9rem] lg:w-[9.75rem] bg-grey20 rounded-lg">
              2. 간결한 매칭 서비스
            </div>
            <span className="text-[1.6rem] lg:text-[2.62rem] font-bold pt-3  lg:leading-[3.625rem] text-center lg:text-left">
              프로필만 등록하면
              <br />
              쏟아지는 추천 매칭
              <br />
            </span>
            <span className="text-xs lg:text-xl text-grey70 font-medium pt-2 text-center leading-4">
              가이드에 맞게 프로필을 등록하면 <br className="flex sm:hidden" />
              사용자들이 매칭을 요청해요
            </span>
          </div>
        </div>
        {/* right */}

        <div className="w-full lg:w-[50%] lg:h-full flex flex-col gap-3 pt-2 justify-center items-center">
          <div className="sm:w-[41rem] flex flex-col gap-4 items-center ">
            <div className="flex flex-col justify-start items-center gap-4 w-full">
              <div className="text-lg lg:text-[1.36rem] font-bold flex justify-start w-full">내가 받은 매칭</div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request1.png'}
                  width={652}
                  height={113}
                  alt="request1"
                  className="shadow-alarm-shadow md:flex hidden"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request2.png'}
                  width={537}
                  height={80}
                  alt="request1"
                  className="shadow-alarm-shadow md:flex hidden"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                <Image
                  src={'/assets/intro/request/request3.png'}
                  width={503}
                  height={74}
                  alt="request1"
                  className="shadow-alarm-shadow md:flex hidden"
                />
              </motion.div>

              {/* 모바알 */}
              <Image
                src={'/assets/intro/request/request1mobile.png'}
                width={333}
                height={104}
                alt="request1"
                className="shadow-alarm-shadow md:hidden flex"
              />
              <Image
                src={'/assets/intro/request/request2mobile.png'}
                width={285}
                height={89}
                alt="request1"
                className="shadow-alarm-shadow md:hidden flex"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
